/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React from 'react';
import { IoMdAddCircle } from "react-icons/io";

function Memberinfo() {
  return (
    <div>
        <div className="MIHeader">
        <h2>Members&#39; Info</h2>
        </div>
        <div className="MIAddContainer">
            <div className="MIAddBtn"><IoMdAddCircle className="MIAddIcon" />&nbsp;Add Member</div>
        </div>
        
    </div>
    
  )
}

export default Memberinfo