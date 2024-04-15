/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../stylesheets/Addmember.css";
import { postMember } from '../utils/api-calls';
function Addmember({ closeModal }) {

  const [success,setSuccess] = useState(false);

  async function addMember(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let memberInfo = {"name" : name, "email_id" : email, "contact_no" : phone, "penalty" : "0.00"};
    await postMember(memberInfo).then(()=>{
      setSuccess(true);
    });
  }

  function refreshPage(){
    window.location.reload();
  }

  return (
    <div className='AMBackground'>
        <div className='AMModal'>
            { success == false ? 
            <>
              <div className='AMBtnConatiner'>
                <button className="AMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
              </div>
              <div className='AMTitle'><h4>Add Member</h4></div>
              <input className="AMName" type="text" id="name" placeholder="Enter Member Name"></input><br/>
              <input className="AMName" type="text" id="email" placeholder="Enter Email Id"></input><br/>
              <input className="AMName" type="text" id="phone" placeholder="Enter Phone No."></input><br/>
              <button className="AMAdd" onClick={addMember}>Add</button>
              <button className="AMAdd" onClick={()=>{closeModal(false)}}>Cancel</button>
            </>:
            <>
              <br/><div>Member added successfully!</div><br />
              <button className='AMAdd' onClick={refreshPage}>OK</button>
            </>
            }
        </div>
    </div>
    
  )
}

export default Addmember