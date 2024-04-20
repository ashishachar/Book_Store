import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import React from 'react';
function Homepage() {
  return (
    <div className="home container">
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow rounded">
          <div className="container d-flex justify-content-between">
            <div className="navbar-brand d-flex align-items-center">
              <ImBooks />
              &nbsp;
              <Link to={"/home"}>
                <strong>BookStore</strong>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="jumbotron text-center my-3 border rounded">
        <div className="container">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 box-shadow">
                    <div className="card-body">
                      <p className="card-text text-start">
                        <b>Books</b>
                        <br />
                        Show all books
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Option1
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Option2
                          </button>
                        </div>
                        <small className="text-muted">
                          <Link to={"/books"}>
                            <div className="btn btn-success">
                              <FaArrowRight />
                            </div>
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card mb-4 box-shadow">
                    <div className="card-body">
                      <p className="card-text text-start">
                        <b>Members</b>
                        <br />
                        Show all members{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Option1
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Option2
                          </button>
                        </div>
                        <small className="text-muted">
                          <Link to={"/members"}>
                            <div className="btn btn-success">
                              <FaArrowRight />
                            </div>
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="jumbotron heading">Recent Transactions</h5>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Member</th>
                <th scope="col">Book Title</th>
                <th scope="col">Borrow Date</th>
                <th scope="col">Return Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">001</th>
                <td>Rancho</td>
                <td>Harry Potter and the Prisoner of Azkaban</td>
                <td>12-April-2024</td>
                <td>No</td>
              </tr>
              <tr>
                <th scope="row">001</th>
                <td>Rancho</td>
                <td>Harry Potter and the Prisoner of Azkaban</td>
                <td>12-April-2024</td>
                <td>No</td>
              </tr>
              <tr>
                <th scope="row">001</th>
                <td>Rancho</td>
                <td>Harry Potter and the Prisoner of Azkaban</td>
                <td>12-April-2024</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
          <div className="py-3">
            <Link to={"/transactions"}>
              <div className="btn btn-primary">
                All Transactions <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
