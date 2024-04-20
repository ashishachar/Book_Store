// import React from 'react';
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className="d-flex justify-content-center mt-3 w-50">
      <div className="form-outline d-flex ">
        <input type="search" id="form1" className="form-control" />
      </div>
      <div type="button" className="btn btn-primary">
        <FaSearch />
      </div>
    </div>
  );
}

export default Navbar;
