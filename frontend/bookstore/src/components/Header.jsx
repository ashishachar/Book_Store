// import React from 'react'
import { ImBooks } from "react-icons/im";
import {Link} from 'react-router-dom';

function Header() {
  return (
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
  )
}

export default Header