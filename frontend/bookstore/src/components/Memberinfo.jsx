/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Member from "./Member";
import Addmember from "./Addmember";
import { getAllUsers } from "../utils/api-calls";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";

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
  
  const options = [
    { value: 'id lower first', label: 'ID (Lower first)' },
    { value: 'id higher first', label: 'ID (Higher first)' },
    { value: 'name (a-z)', label: 'Name (A-Z)' },
    { value: 'name (z-a)', label: 'Name (Z-A)'}
  ]

  return (
    <div className="MIContainer ">
      <div className="MIHeader rounded">
        <h2>Members&#39; Info</h2>
      </div>
      <div className="MIAddContainer">
        <div className="MISearchContainer d-flex">
          <input className="MISearch" type="text" placeholder="Enter id or Name or Email or Phone No."></input>
          <button className="MIAddBtn ms-1"> <FaSearch/></button>
        </div>
        <Select 
          className="MISelect" 
          options={options} 
          placeholder = "Sort" 
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderWidth:2,
              borderRadius: 17,
              borderColor: 'black',
            }),
            option: (provided, state) =>({
              ...provided,
              backgroundColor: state.isSelected ? 'black' :  'white' 
            })
          }}
        />
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
