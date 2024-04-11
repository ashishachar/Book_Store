// import React from 'react'
import Select from "react-select";

function BookUpdate() {
  const genres = [
    { value: "Fiction", label: "Fiction" },
    { value: "Mystery", label: "Mystery" },
    { value: "Action", label: "Action" },
    { value: "Adventure", label: "Adventure" },
    { value: "Drama", label: "Drama" },
    { value: "Science", label: "Science" },
    { value: "Humor", label: "Humor" },
    { value: "Crime", label: "Crime" },
    { value: "Horror", label: "Horror" }
  ];

  return (
    <div className="container">
      <h3 className="bg-dark m-0 p-3 text-white rounded border">
        Add new Book
      </h3>
      <br />
      <br />
      <div className="rounded border text-dark bg-white py-3">
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>
            Book Title
          </h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-2"
              id="title"
              placeholder="Book Title here..."
            />
          </div>
        </div>
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>Author</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-2"
              id="author"
              placeholder="Author here..."
            />
          </div>
        </div>
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>
            No of Copies
          </h5>
          <div className="input-group">
            <input
              type="number"
              className="form-control mx-2"
              id="copies"
              placeholder="No of Copies..."
            />
          </div>
        </div>

        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem"  }}>
            Categories
          </h5>
          <div className="input-group">
            <Select
              //   defaultValue={[genres[0], genres[1]]}
              isMulti
              name="colors"
              options={genres}
              className="basic-multi-select w-100 mx-2"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-around">
            <div className="d-flex justify-content-around w-50 ">
                <div className="btn btn-success ">Submit</div>
                <div className="btn btn-warning">Clear</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BookUpdate;
