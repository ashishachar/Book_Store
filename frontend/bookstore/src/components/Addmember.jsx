/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../stylesheets/Addmember.css";

function Addmember({ closeModal }) {
  return (
    <div className='AMBackground'>
        <div className='AMModal'>
            <div className='AMBtnConatiner'>
                <button className="AMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
            </div>
            <div className='AMTitle'><h4>Add Member</h4></div>
            <input className="AMName" type="text" placeholder="Enter Member Name"></input><br/>
            <input className="AMName" type="text" placeholder="Enter Email Id"></input><br/>
            <input className="AMName" type="text" placeholder="Enter Phone No."></input><br/>
            <button className="AMAdd">Add</button>
            <button className="AMAdd" onClick={()=>{closeModal(false)}}>Cancel</button>
        </div>
    </div>
    
  )
}

export default Addmember