// import React from 'react'

function UserUpdate() {
  return (
    <div className="container">
      <h3 className="bg-dark m-0 p-3 text-white rounded border">
        Add new Member
      </h3>
      <br />
      <br />
      <div className="rounded border text-dark bg-white py-3">
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>
            Username  
          </h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-2"
              id="title"
              placeholder="Username here..."
            />
          </div>
        </div>
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>Email</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-2"
              id="author"
              placeholder="Email here..."
            />
          </div>
        </div>
        <div className="mb-3">
          <h5 style={{ textAlign: "left", marginLeft: "0.5rem" }}>
            Phone number
          </h5>
          <div className="input-group">
            <input
              type="number"
              className="form-control mx-2"
              id="copies"
              placeholder="Contact number..."
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
  )
}

export default UserUpdate