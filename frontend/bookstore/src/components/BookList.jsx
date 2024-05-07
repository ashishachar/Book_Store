import { getAllBooks } from "../utils/api-calls";
// import Navbar from "./Navbar";
import { BsThreeDots } from "react-icons/bs";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Header from "./Header";
// import { Link } from "react-router-dom";
import Select from "react-select";
import { dummyBookData as dummyData, genres } from "../utils/options";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [showList, setShowList] = useState([]);
  const [search, setSearch] = useState({
    categories: [],
    searchKeyWord: "",
    toggle: false,
  });
  useEffect(() => {
    // console.log(search, showList);
  }, [search, showList]);

  const updateFilter = () => {
    // console.log("adding Filters");
    let res = [];
    if (search.searchKeyWord == "" && search.categories.length == 0) {
      // console.log("Emtpy search . No libros aqui");
      setShowList(books);
      return;
    }
    books.forEach((book) => {
      if (search.searchKeyWord == "") {
        console.log("Empty string");
        res.push(book);
      } else if (
        book.author
          .toLowerCase()
          .includes(search.searchKeyWord.toLowerCase()) ||
        book.title.toLowerCase().includes(search.searchKeyWord.toLowerCase())
      ) {
        console.log("Found string" + search.searchKeyWord);
        res.push(book);
      }
    });
    // console.log(res);
    let catList = [];
    search.categories.forEach((cat) => {
      // console.log(cat);
      catList.push(cat.value.toLowerCase());
    });
    // console.log(catList);
    const catSet = catList;
    let finalRes = [];
    if (search.categories.length == 0) {
      finalRes = res;
    } else {
      res.forEach((book) => {
        // console.log(book);
        const d = book.categories.some((bookcat) =>
          catSet.includes(bookcat.toLowerCase())
        );
        if (d) {
          finalRes.push(book);
        }
      });
    }
    // console.log(finalRes);
    setShowList(finalRes);
  };
  useEffect(() => {
    const dataFetch = async () => {
      try {
        let data = await getAllBooks();
        setBooks(data ? data : dummyData);
        setShowList(data ? data : dummyData);
      } catch (error) {
        // console.log(error.message);
        setBooks(dummyData);
      }
    };
    dataFetch();
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="w-100 mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Book / Author ..." //="Text input with dropdown button"
            value={search.searchKeyWord}
            onChange={(e) => {
              setSearch({ ...search, searchKeyWord: e.target.value });
            }}
          />
          <div className="input-group-append">
            <div
              className="btn border btn-outline-success"
              onClick={updateFilter}
            >
              <FaSearch></FaSearch>
            </div>
          </div>
          <div className="input-group-append">
            <div
              className="btn border btn-outline-primary"
              onClick={() => {
                setSearch({ ...search, toggle: !search.toggle });
                console.log(search);
              }}
            >
              <BsThreeDots></BsThreeDots>
            </div>
          </div>
        </div>
      </div>
      {search.toggle ? (
        <div className="w-100 mt-3">
          <div className="d-flex justify-content-between">
            <div className="">
              <h6 className="w-25 text-start mx-2">Categories</h6>
              <Select
                isMulti
                name="colors"
                options={genres}
                className="basic-multi-select mx-2 "
                classNamePrefix="select"
                value={search.categories}
                onChange={(e) => {
                  setSearch({ ...search, categories: e });
                }}
              />
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-white">{" blah "}</h6>
              <div className="btn btn-success" onClick={updateFilter}>
                Filter &nbsp;
                <FaFilter />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <br />
      <table className="table table-dark">
        <thead className="thead">
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Copies</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {Object.keys(showList).map((listItem, listKey) => {
            // console.log(showList[listItem]);
            return (

              // <Link to={'/book/info/'+showList[listItem]["book_id"]} key={listKey}>

              <tr  key={listKey} className=" table-light border">
                
                <th scope="row">
                  {showList[listItem]["book_id"]
                    ? String(showList[listItem]["book_id"]).padStart(5, "0")
                    : "--"}
                </th>
                <td>
                <Link to={'/book/info/'+showList[listItem]["book_id"]} key={listKey}>
                  {showList[listItem]["title"]
                    ? showList[listItem]["title"]
                    : "--"}
                </Link>
                </td>
                <td>
                  {showList[listItem]["author"]
                    ? showList[listItem]["author"]
                    : "--"}
                </td>
                <td>
                  {showList[listItem]["categories"]
                    ? showList[listItem]["categories"].join(", ")
                    : "--"}
                </td>
                <td>
                  {showList[listItem]["no_of_copies"]
                    ? showList[listItem]["no_of_copies"]
                    : "--"}
                </td>
              </tr>
              // </Link>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
