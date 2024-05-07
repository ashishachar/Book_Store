/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../stylesheets/Updatebook.css";
import Bookinfo from './Bookinfo';
import Select from 'react-select';

function Updatebook({closeModal,bookData}) {
    // console.log(">>>",bookData);
    const [success,setSuccess] = useState(false);
    // const [valid, setValid] = useState("");
    const [bookInfo,setBookInfo] = useState({
      title : bookData.title , 
      author : bookData.author, 
      no_of_copies : bookData.no_of_copies, 
      categories : bookData.categories
    });

    async function addBook(){
        // console.log("Update");
        setSuccess(true);
    }

    function clearModal(){
        setBookInfo({title : "", author : "", no_of_copies : 0, categories: []});
    }

    function refreshPage(){
        window.location.reload();
    }

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
    <div className='UBBackground'>
        <div className='UBModal'>
            { success == false ? 
            <>
              <div className='UBBtnConatiner'>
                <button className="UMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
              </div>
              <div className='UBTitle'><h3>Edit Member</h3></div>
                <input
                    type="text"
                    className="UBName"
                    placeholder="Enter Book Title"
                    value={bookInfo.title}
                    onChange={(e)=>{setBookInfo({...bookInfo , title : e.target.value})}}
                /><br/>
                <input
                    type="text"
                    className="UBName"
                    placeholder="Enter Author Name"
                    value={bookInfo.author}
                    onChange={(e)=>{setBookInfo({...bookInfo , author : e.target.value})}}
                /><br/>
                <input
                    type="number"
                    className="UBName"
                    id="copies"
                    placeholder="Enter No. of Copies"
                    value={bookInfo.no_of_copies}
                    onChange={(e)=>{setBookInfo({...bookInfo , no_of_copies : e.target.value})}}
                /><br/>
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderWidth:2,
                        borderRadius: 17,
                        borderColor: 'black',
                        width: 700
                        }),
                        option: (provided, state) =>({
                        ...provided,
                        backgroundColor: state.isSelected ? 'black' :  'white' 
                        })
                    }}
                    isMulti
                    name='colors'
                    options={genres}
                    className="basic-multi-select w-100 mx-2"
                    classNamePrefix="Select"
                    value={bookInfo.categories}
                    onChange={(e)=>{setBookInfo({...bookInfo , categories : e})}}
                /><br/>
              <button className="UBAdd" onClick={addBook}>Edit</button>
              <button className="UBAdd" onClick={clearModal}>Clear</button>
              {/* <div className="UMValid">{valid}</div> */}
            </>:
            <>
              <br/><div><h5>Member Edited successfully!</h5></div><br />
              <button className='UBAdd' onClick={refreshPage}>OK</button>
            </>
            }
        </div>
    </div>
  )
}

export default Updatebook