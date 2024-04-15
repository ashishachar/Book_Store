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

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const dataFetch = async () => {
      let data = await getAllUsers();

      // data.map(d=>{
      //   console.log(d , d.categories);
      // })

      setUsers(data);
    };
    dataFetch();
  }, []);

  // const memberlist = [
  //   {
  //     id: "1001",
  //     name: "Rancho",
  //     email: "Rancho@paws.com",
  //     phone: "9876543210",
  //     Penalty: 0.0,
  //   },
  //   {
  //     id: "1002",
  //     name: "Snoopy",
  //     email: "Snoopy@paws.com",
  //     phone: "9976543210",
  //     Penalty: 100.0,
  //   },
  //   {
  //     id: "1003",
  //     name: "Tippu",
  //     email: "Tippu@lewis.com",
  //     phone: "9777747678",
  //     Penalty: 0.0,
  //   },
  //   {
  //     id: "1004",
  //     name: "Mothi",
  //     email: "Mothi@paws.com",
  //     phone: "9547568748",
  //     Penalty: 0.0,
  //   },
  //   {
  //     id: "1005",
  //     name: "Tiger",
  //     email: "Tiger@paws.com",
  //     phone: "8465465464",
  //     Penalty: 200.0,
  //   },
  // ];

  return (
    <div className="MIContainer ">
      <div className="MIHeader rounded">
        <h2>Members&#39; Info</h2>
      </div>
      <div className="MIAddContainer">
        <button
          className="MIAddBtn"
          onClick={() => {
            setOpen(true);
          }}
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
        {/* {
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

            } */}

        {users.map((member, index) => {
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
        })}
      </div>
      {open && <Addmember closeModal={setOpen} />}
    </div>
  );
}

export default Memberinfo;
