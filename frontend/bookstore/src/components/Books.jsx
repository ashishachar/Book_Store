// import React from 'react'

function Books() {
  let bookData = [0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="container">
      <div className="card-deck mb-3 text-center row">
        {bookData.map((book, bookID) => {
          return (
            <div key={bookID} className="p-1 col-md-4 ">
              <div className="m-1 box-shadow card p-0">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">#012343345</h4>
                </div>
                <div className="card-body">
                  <h4 className="text-truncate">Harry Potter and the prisoner of Azkaban</h4>
                  <div className="d-flex w-100">
                    <div className="w-25 text-start">Author</div>
                    <div className="w-75 text-start text-truncate">J K Rowling</div>
                  </div>
                  <div className="d-flex w-100 mt-2">
                    <div className="w-75 d-flex  text-start">
                    <div className="btn btn-primary mx-2 p-1 ">Fantasy</div>
                    <div className="btn btn-primary mx-2 p-1">Adventure</div>
                    </div>
                    <div className="w-25 text-end">
                      <div className="btn btn-success">13</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
