/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React from 'react';
import { IoMdAddCircle } from "react-icons/io";
import Member from "./Member";

function Memberinfo() {
  return (
    <div className="MIContainer">
        <div className="MIHeader">
        <h2>Members&#39; Info</h2>
        </div>
        <div className="MIAddContainer">
            <div className="MIAddBtn"><IoMdAddCircle className="MIAddIcon" />&nbsp;Add Member</div>
        </div>
        <div className="MIListHeader">
          <div className='MIId'>ID</div>
          <div className='MIChars'>Name</div>
          <div className='MIChars'>Email</div>
          <div className='MINumbers'>Phone No.</div>
          <div className='MINumbers'>Penalty</div>
          <div className='MIDelete'>Delete</div>
        </div>
        <div className="MIList">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
        
    </div>
    
  )
}

export default Memberinfo