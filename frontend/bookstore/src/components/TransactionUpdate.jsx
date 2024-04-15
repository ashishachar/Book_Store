// import React from 'react'
import Header from "./Header";
import Select from "react-select";
import { useState, useEffect } from "react";
import { getAllBooks, getAllUsers } from "../utils/api-calls";
// import { FaCalendarAlt } from "react-icons/fa";

function TransactionUpdate() {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [info, setInfo] = useState({ book: "", member: "", borrowDate: "1999-01-01" });

const onChangeDate = (e)=>{
    setInfo({...info , borrowDate : e.target.value});
}

  useEffect(() => {
    const getDate = () => {
      let d = new Date();
      let res =
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0");
      return res;
    };
    setInfo({...info , borrowDate : getDate()});

    const fetchAllMembers = async () => {
      const member = await getAllUsers();
      // console.log(members);
      let membersState = [];
      member.forEach((mem) => {
        // console.log(mem.id , mem.name);
        membersState.push({ value: mem.id, label: mem.name });
      });
      console.log(membersState, members);
      setMembers(membersState);
    };
    const fetchAllBooks = async () => {
      const books = await getAllBooks();
      // console.log(members);
      let bookState = [];
      books.forEach((book) => {
        // console.log(mem.id , mem.name);
        bookState.push({ value: book.id, label: book.title });
      });
      console.log(bookState, books);
      setBooks(bookState);
    };

    fetchAllBooks();
    fetchAllMembers();
  }, []);

  useEffect(() => {
    // console.log(staticInfo);
    console.log(books, members , info);
  }, [members, books , info]);

  return (
    <div className="container">
      <Header />
      <section className="jumbotron text-center my-3 border rounded">
        <h3 className="bg-dark m-0 p-3 text-white rounded border">
          New Transaction
        </h3>
        <br />
        <br />
        <div className="rounded border text-dark bg-white py-3">
          <div className="mb-3">
            <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>Book</h5>
            <div className="input-group">
              <Select
                //   defaultValue={[genres[0], genres[1]]}

                name="colors"
                options={books}
                className="basic-multi-select w-100 mx-2"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div className="mb-3">
            <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>Member</h5>
            <div className="input-group">
              <Select
                //   defaultValue={[genres[0], genres[1]]}

                name="colors"
                options={members}
                className="basic-multi-select w-100 mx-2"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div className="mb-3">
            <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>
              Borrow Date
            </h5>
            <div className="input-group">
              <input
                type="date"
                className="form-control mx-2"
                id="copies"
                placeholder="yyyy-mm--dd"
                // defaultValue={info.borrowDate}
                value={info.borrowDate}
                onChange={(e)=>{onChangeDate(e)}}
              />
              {/* <div className="input-group-append">
                <span className="input-group-text p-3">
                  <FaCalendarAlt />
                </span>
              </div> */}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-around">
            <div className="d-flex justify-content-around w-50 ">
              <div className="btn btn-success ">Submit</div>
              <div className="btn btn-warning">Clear</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TransactionUpdate;
