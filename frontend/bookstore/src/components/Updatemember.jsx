/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import "../stylesheets/Updatemember.css";

function Updatemember({closeModal,membData}) {
    const [success,setSuccess] = useState(false);
    const [valid, setValid] = useState("");
    const [membInfo,setMembInfo] = useState(membData);
    async function addMember(){
        if(membInfo.name == ""){
            setValid("Enter Member Name");
        }else if(membInfo.email_id == ""){
            setValid("Enter Email Id");
        }else if(membInfo.contact_no == ""){
            setValid("Enter Phone No.");
        }else if(membInfo.penalty == ""){
            setValid("Enter Penalty");
        }else if(!/^[A-Za-z][A-Za-z]{3,12}$/i.test(membInfo.name)){
            setValid("Invalid Member Name");
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(membInfo.email_id)){
            setValid("Invalid Email Id");
        }else if(!/^(?:(?:\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/i.test(membInfo.contact_no)){
            setValid("Invalid Phone No.");
        }else if(!/^(0|[1-9]\d*)(\.\d+)?$/i.test(membInfo.penalty)){
            setValid("Invalid Penalty");
        }else{
            setSuccess(true);
            console.log("Edited",membInfo);
        }
      
    }
  
    function refreshPage(){
      window.location.reload();
    }
  
    function clearModal(){
      setValid("");
      setMembInfo({name : "", email_id : "", contact_no : "",});
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

    const handleChangePenalty =(e) =>{
        setMembInfo({...membInfo, penalty : e.target.value});
    }

  return (
    <div className='UMBackground'>
        <div className='UMModal'>
            { success == false ? 
            <>
              <div className='UMBtnConatiner'>
                <button className="UMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
              </div>
              <div className='UMTitle'><h4>Edit Member</h4></div>
              <input className="UMName" value={membInfo.name} type="text" onChange= {handleChangeName} placeholder="Enter Member Name"></input><br/>
              <input className="UMName" value={membInfo.email_id} type="text" onChange= {handleChangeEmail} placeholder="Enter Email Id"></input><br/>
              <input className="UMName" value={membInfo.contact_no} type="text" onChange= {handleChangePhone} placeholder="Enter Phone No."></input><br/>
              <input className="UMName" value={membInfo.penalty} type="text" onChange= {handleChangePenalty} placeholder="Enter Penalty"></input><br/>
              <button className="UMAdd" onClick={addMember}>Edit</button>
              <button className="UMAdd" onClick={clearModal}>Clear</button>
              <div className="UMValid">{valid}</div>
            </>:
            <>
              <br/><div>Member Edited successfully!</div><br />
              <button className='UMAdd' onClick={refreshPage}>OK</button>
            </>
            }
        </div>
    </div>
    
  )
}

export default Updatemember