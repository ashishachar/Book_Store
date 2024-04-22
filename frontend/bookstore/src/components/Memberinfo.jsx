/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Member from "./Member";
import Addmember from "./Addmember";
import { getAllUsers } from "../utils/api-calls";
function Memberinfo() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      let data = await getAllUsers();
      setUsers(data);
    };
    dataFetch();
  }, []);

  return (
    <div className="MIContainer ">
      <div className="MIHeader rounded">
        <h2>Members&#39; Info</h2>
      </div>
      <div className="MIAddContainer">
        <button
          className="MIAddBtn"
          onClick={()=>{setOpen(true);}}
        >
          <IoMdAddCircle  className="MIAddIcon"/>
          &nbsp;Add Member
        </button>
      </div>
      <div className="MIListHeader">
        <div className="MIId">ID</div>
        <div className="MIChars">Name</div>
        <div className="MIChars">Email</div>
        <div className="MINumbers">Phone No.</div>
        <div className="MINumbers">Penalty</div>
        <div className="MIDelete">Delete</div>
      </div>
      <div className="MIList">
        {users ? 
          users.map((member, index) => {
            return (
              <Member
                key={index}
                infoId={String(member.id).padStart(5, '0')}
                infoName={member.name}
                infoEmail={member.email_id}
                infoPhone={member.contact_no}
                infoPenalty={member.penalty}
              />
            );
          }):
          <><div className='MIEmpty'>No members yet!</div></>
        }

      </div>
      {open && <Addmember closeModal={setOpen}/>}
    </div>
  );
}

export default Memberinfo;
