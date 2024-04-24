/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../stylesheets/Addmember.css";
import { postMember } from '../utils/api-calls';
function Addmember({ closeModal }) {
  const [success,setSuccess] = useState(false);
  const [valid, setValid] = useState("");
  const [membInfo,setMembInfo] = useState({name : "", email_id : "", contact_no : "", penalty : 0.00})

  async function addMember(){

    if(membInfo.name == ""){
      setValid("Enter Member Name");
    }else if(membInfo.email_id == ""){
      setValid("Enter Email Id");
    }else if(membInfo.contact_no == ""){
      setValid("Enter Phone No.");
    }else if(!/^[A-Za-z][A-Za-z]{3,12}$/i.test(membInfo.name)){
      setValid("Invalid Member Name");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(membInfo.email_id)){
      setValid("Invalid Email Id");
    }else if(!/^(?:(?:\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/i.test(membInfo.contact_no)){
      setValid("Invalid Phone No.");
    }else{
      await postMember(membInfo).then(()=>{
        setSuccess(true);
        setValid("");
      });
    }
    
  }

  function refreshPage(){
    window.location.reload();
  }

  function clearModal(){
    setValid("");
    setMembInfo({name : "", email_id : "", contact_no : "", penalty : 0.00});
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
              <div className='AMTitle'><h3>Add Member</h3></div>
              <input className="AMName" value={membInfo.name} type="text" onChange= {handleChangeName} placeholder="Enter Member Name"></input><br/>
              <input className="AMName" value={membInfo.email_id} type="text" onChange= {handleChangeEmail} placeholder="Enter Email Id"></input><br/>
              <input className="AMName" value={membInfo.contact_no} type="text" onChange= {handleChangePhone} placeholder="Enter Phone No."></input><br/>
              <button className="AMAdd" onClick={addMember}>Add</button>
              <button className="AMAdd" onClick={clearModal}>Clear</button>
              <div className="AMValid">{valid}</div>
            </>:
            <>
              <br/><div><h5>Member added successfully!</h5></div><br />
              <button className='AMAdd' onClick={refreshPage}>OK</button>
            </>
            }
        </div>
    </div>
    
  )
}

export default Addmember