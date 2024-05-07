// import React from 'react'
import Select from "react-select";
import Header from './Header';
import {useState , useEffect} from 'react';

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
  const [info , setInfo] = useState({title : '' , author : '' , no_of_copies:0 , categories : []});

  useEffect(()=>{

  },[]);

  useEffect(()=>{
    // console.log(info);
  },[info]);

  const  onSubmitMeth = () =>{
    // console.log('New Book Added : ');
    let res = info ;
    let catTemp =[] ;
    for(let category in res['categories'])
    {
      catTemp.push(res['categories'][category]['value']);
    }
    res['categories'] = catTemp ;
    // console.log(res);

    //Call post metod to add new Book

  }
  
  const onClearMeth =()=>{
    // console.log('Form Cleared : ');
    setInfo(
      {title : '' , author : '' , no_of_copies:0, categories : []}
    )
  }


  return (
    <div className="container">
      <Header />
      <h3 className="bg-dark m-0 mt-2 p-3 text-white rounded border">
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
              value={info.title}
              onChange={(e)=>{setInfo({...info , title : e.target.value})}}
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
              value={info.author}
              onChange={(e)=>{setInfo({...info , author : e.target.value})}}
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
              value={info.no_of_copies}
              onChange={(e)=>{setInfo({...info , no_of_copies : e.target.value})}}
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
              value={info.categories}
              onChange={(e)=>{setInfo({...info , categories : e})}}
            />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-around">
            <div className="d-flex justify-content-around w-50 ">
                <div className="btn btn-success" onClick={onSubmitMeth}>Submit</div>
                <div className="btn btn-warning" onClick={onClearMeth}>Clear</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BookUpdate;
