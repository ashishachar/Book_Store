/* eslint-disable no-unused-vars */
import "../stylesheets/Memberinfo.css";
import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Member from "./Member";
import Header from "./Header";
import Addmember from "./Addmember";
import { getAllUsers } from "../utils/api-calls";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { options } from "../utils/options";

function Memberinfo() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [showList, setShowList] = useState([]);
  const [search, setSearch] = useState({
    searchKey: "",
    sortKey: options[0],
  });

  const filterMethod =(e)=>{
    // console.log('Filter method : ',e.target.value);
    setSearch({...search , searchKey : e.target.value});
    let resList = [];
    if (e.target.value != "") {
      users.map((user) => {
        if (
          user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email_id
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          String(user.contact_no)
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          // console.log(user);
          resList.push(user);
        }
      });
    } else {
      // console.log('Empty',showList);
      resList = users;
    }
    setShowList(resList);
  }

  const updateSortMethod = (e) => {
    // console.log('Update');
    let resList = [];
    if (search.searchKey != "") {
      users.map((user) => {
        if (
          user.name.toLowerCase().includes(search.searchKey.toLowerCase()) ||
          user.email_id
            .toLowerCase()
            .includes(search.searchKey.toLowerCase()) ||
          String(user.contact_no)
            .toLowerCase()
            .includes(search.searchKey.toLowerCase())
        ) {
          // console.log(user);
          resList.push(user);
        }
      });
    } else {
      resList = users;
    }

    setSearch({ ...search, sortKey: e });
    if (options[0].value == e.value) {
      let res = resList.sort((a, b) => a.id - b.id);
      setShowList(res);
    } else if (options[1].value == e.value) {
      let res = resList.sort((a, b) => b.id - a.id);
      setShowList(res);
    } else if (options[2].value == e.value) {
      let res = resList.sort((a, b) => a.name.localeCompare(b.name));
      setShowList(res);
    } else {
      let res = resList.sort((a, b) => b.name.localeCompare(a.name));
      setShowList(res);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      let data = await getAllUsers();
      setUsers(data);
      setShowList(data);
    };
    dataFetch();
  }, []);

  useEffect(() => {
    // console.log(search, users);
  }, [search]);


  return (
    <div className="container">
      <Header />
      <div className="MIContainer pt-3">
        <div className="MIHeader rounded">
          <h4>Members&#39; Info</h4>
        </div>
        <div className="MIAddContainer">
          <div className="MISearchContainer d-flex">
            <input
              value={search.searchKey}
              onChange={(e) => {
                filterMethod(e)
              }}
              className="MISearch px-1"
              type="text"
              placeholder="Enter id or Name or Email or Phone No."
            ></input>
            <button className="MIAddBtn ms-1">
              {" "}
              <FaSearch />
            </button>
          </div>
          <Select
            className="MISelect"
            options={options}
            placeholder="Sort"
            value={search.sortKey}
            onChange={(e) => {
              updateSortMethod(e);
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderWidth: 2,
                borderRadius: 17,
                borderColor: "black",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? "black" : "white",
              }),
            }}
          />
          <button
            className="MIAddBtn"
            onClick={() => {
              setOpen(true);
            }}
          >
            <IoMdAddCircle className="MIAddIcon" />
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
          {showList ? (
            showList.map((member, index) => {
              return (
                <Member
                  key={index}
                  infoId={String(member.id).padStart(5, "0")}
                  infoName={member.name}
                  infoEmail={member.email_id}
                  infoPhone={member.contact_no}
                  infoPenalty={member.penalty}
                />
              );
            })
          ) : (
            <>
              <div className="MIEmpty">No members yet!</div>
            </>
          )}
        </div>
        {open && <Addmember closeModal={setOpen} />}
      </div>
    </div>
  );
}

export default Memberinfo;
