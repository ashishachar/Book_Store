/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/Deletebook.css";
import { deleteBookById } from '../utils/api-calls';

function Deletebook({closeModal,bookData}) {
    const [success,setSuccess] = useState(false);

    async function deleteBook(){
      await deleteBookById(bookData.book_id).then(()=>{
        setSuccess(true);
      });
    }

    function refreshPage(){
        window.location.reload();
    }
  return (
    <div className='DBBackground'>
    <div className='DBModal'>
        { success == false ? 
        <>
          <div className='DBBtnConatiner'>
            <button className="DBClose" onClick={()=>{closeModal(false)}}>X</button><br/>
          </div>
          
          <br/><div><h5>Are you sure you want to delete the book {bookData.title}?</h5></div>
          <button className="DBDelete" onClick={deleteBook}>Delete</button>
          <button className="DBDelete" onClick={refreshPage}>Cancel</button>
        </>:
        <>
          <br/><div><h5>Book deleted successfully!</h5></div><br />
          <Link to="/books/"><button className='DBDelete'>OK</button></Link>
        </>
        }
    </div>
</div>
  )
}

export default Deletebook