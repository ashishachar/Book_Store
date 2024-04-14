// import React from 'react'
import { getAllBooks } from "../utils/api-calls";
import Navbar from "./Navbar";
import { FaPlus} from 'react-icons/fa';
import {useEffect , useState} from 'react';

function Books() {
  const [books , setBooks] = useState([]);

  useEffect(() => {
    const dataFetch = async()=>{
      let data = await getAllBooks();
      
      // data.map(d=>{
      //   console.log(d , d.categories);
      // })

      setBooks(data);
    }
    dataFetch();
    
  
    
  }, [])

  return (
    <>
    <Navbar />
    <br />
    <div className="container">
      <div className="card-deck mb-3 text-center row">
        {books.map((book, bookID) => {
          return (
            <div key={bookID} className="p-1 col-md-4 ">
              <div className="m-1 box-shadow card p-0">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">#{String(book.id).padStart(5, '0')}</h4>
                </div>
                <div className="card-body">
                  <h4 className="text-truncate">{book.title}</h4>
                  <div className="d-flex w-100">
                    <div className="w-25 text-start text-truncate">Author</div>
                    <div className="w-75 text-start text-truncate">{book.author}</div>
                  </div>
                  <div className="d-flex w-100 mt-2">
                    <div className="w-75 d-flex  text-start">
                    {book.categories.length<=2 ? 
                  <>
                      {
                        book.categories.map((cattempitr ,cattempind)=>{
                          return (
                            <div key={cattempind} className="btn btn-primary p-1 " style={{marginRight : "0.5rem"}}>{cattempitr.categ}</div>
                    
                          )
                        })
                      }
                    {/* <div className="btn btn-primary p-1" style={{marginRight : "0.5rem"}}><FaPlus/></div> */}
                  </>
                  :
                  <>
                  <div className="btn btn-primary p-1 " style={{marginRight : "0.5rem"}}>{book.categories[0].categ}</div>
                    <div className="btn btn-primary p-1" style={{marginRight : "0.5rem"}}>{book.categories[1].categ}</div>
                    <div className="btn btn-primary p-1" style={{marginRight : "0.5rem"}}><FaPlus/></div>
                  </>
                  }
                    </div>
                    <div className="w-25 text-end">
                      <div className="btn btn-success">{book.no_of_copies}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Books;
