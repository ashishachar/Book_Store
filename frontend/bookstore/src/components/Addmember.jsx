/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../stylesheets/Addmember.css";
import { postMember } from '../utils/api-calls';
function Addmember({ closeModal }) {

  const [success,setSuccess] = useState(false);
  const [membInfo,setMembInfo] = useState({name : "", email_id : "", contact_no : "", penalty : 0.00})

  async function addMember(){
    await postMember(membInfo).then(()=>{
      setSuccess(true);
    });
  }

  function refreshPage(){
    window.location.reload();
  }

  const handleChangeName = (e) => {
    setMembInfo({...membInfo, name : e.target.value});
  };

  const handleChangeEmail = (e) => {
    setMembInfo({...membInfo, email_id : e.target.value});
  };

  const handleChangePhone = (e) => {
    setMembInfo({...membInfo, contact_no : e.target.value});
  };

  return (
    <div className='AMBackground'>
        <div className='AMModal'>
            { success == false ? 
            <>
              <div className='AMBtnConatiner'>
                <button className="AMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
              </div>
              <div className='AMTitle'><h4>Add Member</h4></div>
              <input className="AMName" type="text" onChange= {handleChangeName} placeholder="Enter Member Name"></input><br/>
              <input className="AMName" type="text" onChange= {handleChangeEmail} placeholder="Enter Email Id"></input><br/>
              <input className="AMName" type="text" onChange= {handleChangePhone} placeholder="Enter Phone No."></input><br/>
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