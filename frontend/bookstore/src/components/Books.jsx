// import React from 'react'
import { getAllBooks } from "../utils/api-calls";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import {dummyBookData as dummyData} from '../utils/options';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        let data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.log(error.message);
        setBooks(dummyData);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <div className="d-flex justify-content-center ">
        <Navbar />
        <Link to={"/books/add"} className="w-50 mt-3 ">
          <div className="d-flex flex-row align-items-center ">
            <h5 className="mx-3">Add Book</h5>
            <div className="btn btn-primary">
              <FaPlus></FaPlus>
            </div>
          </div>
        </Link>
      </div>
      <br />
      <div className="container">
        <div className="card-deck mb-3 text-center row">
          {books.map((book, bookID) => {
            return (
              <div key={bookID} className="p-1 col-md-4 ">
                <Link to= {'/book/info/'+book.book_id} >
                <div className="m-1 box-shadow card p-0">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      #{String(book.book_id).padStart(5, "0")}
                    </h4>
                  </div>
                  <div className="card-body">
                    <h4 className="text-truncate">{book.title}</h4>
                    <div className="d-flex w-100">
                      <div className="w-25 text-start text-truncate">
                        Author
                      </div>
                      <div className="w-75 text-start text-truncate">
                        {book.author}
                      </div>
                    </div>
                    <div className="d-flex w-100 mt-2">
                      <div className="w-75 d-flex  text-start">
                        {book.categories.length <= 1 ? (
                          <>
                            {book.categories.map((cattempitr, cattempind) => {
                              return (
                                <div
                                  key={cattempind}
                                  className="btn btn-success p-1 "
                                  style={{ marginRight: "0.5rem" }}
                                >
                                  {cattempitr}
                                </div>
                              );
                            })}
                            {/* <div className="btn btn-primary p-1" style={{marginRight : "0.5rem"}}><FaPlus/></div> */}
                          </>
                        ) : (
                          <>
                            <div
                              className="btn btn-success p-1 "
                              style={{ marginRight: "0.5rem" }}
                            >
                              {book.categories[0]}
                            </div>
                            {/* <div
                              className="btn btn-primary p-1"
                              style={{ marginRight: "0.5rem" }}
                            >
                              {book.categories[1].categ}
                            </div> */}
                            <div
                              className="btn btn-success  p-1"
                              style={{ marginRight: "0.5rem" }}
                            >
                              <FaPlus />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="w-25 text-end">
                        <div className="btn btn-success">
                          {book.no_of_copies}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Books;
