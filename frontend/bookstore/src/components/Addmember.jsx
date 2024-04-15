/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../stylesheets/Addmember.css";
import { postMember } from '../utils/api-calls';

function Addmember({ closeModal }) {

  async function addMember(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let memberInfo = {"name" : name, "email_id" : email, "contact_no" : phone, "penalty" : "0.00"};
    await postMember(memberInfo);
  }
  return (
    <div className='AMBackground'>
        <div className='AMModal'>
            <div className='AMBtnConatiner'>
                <button className="AMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
            </div>
            <div className='AMTitle'><h4>Add Member</h4></div>
            <input className="AMName" type="text" id="name" placeholder="Enter Member Name"></input><br/>
            <input className="AMName" type="text" id="email" placeholder="Enter Email Id"></input><br/>
            <input className="AMName" type="text" id="phone" placeholder="Enter Phone No."></input><br/>
            <button className="AMAdd" onClick={addMember}>Add</button>
            <button className="AMAdd" onClick={()=>{closeModal(false)}}>Cancel</button>
        </div>
    </div>
    
  )
}

export default Addmember