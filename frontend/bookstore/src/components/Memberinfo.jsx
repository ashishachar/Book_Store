/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import Member from "./Member";
import Addmember from "./Addmember";

function Memberinfo() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const memberlist = 
    [
        {id:"1001", name: "Rancho", email: "Rancho@paws.com" , phone: "9876543210", Penalty: 0.00},
        {id:"1002", name: "Snoopy", email: "Snoopy@paws.com" , phone: "9976543210", Penalty: 100.00},
        {id:"1003", name: "Tippu", email: "Tippu@lewis.com" , phone: "9777747678", Penalty: 0.00},
        {id:"1004", name: "Mothi", email: "Mothi@paws.com" , phone: "9547568748", Penalty: 0.00},
        {id:"1005", name: "Tiger", email: "Tiger@paws.com" , phone: "8465465464", Penalty: 200.00}
    ]

  return (
    <div className="MIContainer">
        <div className="MIHeader">
        <h2>Members&#39; Info</h2>
        </div>
        <div className="MIAddContainer">
            <div className="MIAddBtn" onClick={()=>{setOpen(true)}}><IoMdAddCircle className="MIAddIcon" />&nbsp;Add Member</div>
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
        {
                memberlist ? 
                Object.values(memberlist).map((member,index)=>{
                    return (
                        <Member 
                            key={index} 
                            infoId={member.name} 
                            infoName={member.name} 
                            infoEmail={member.email} 
                            infoPhone={member.phone} 
                            infoPenalty={member.Penalty}
                        />
                    )
                })
                : null

            }
        </div>
        {open && <Addmember closeModal={setOpen}/>}
        
    </div>
    
  )
}

export default Memberinfo