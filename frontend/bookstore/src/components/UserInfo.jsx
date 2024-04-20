// import React from 'react'
import UserImg from "../assets/user.png";
// import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMemberByID } from "../utils/api-calls";
import Header from "./Header";
function UserInfo() {
  const d = useParams()["memID"];

  const [userData, setUserData] = useState({
    id: 0,
    name: "Rancho",
    email_id: "test@gmail.com",
    contact_no: 9695948721,
    penalty: "00.00",
  });
  useEffect(() => {
    const fetchData = async () => {
      const temp = await getMemberByID(d);
      setUserData(temp);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container bg-dark border rounded mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className=" bg-white text-dark rounded m-4">
              <br />
              <h3 className="text-start mx-2 border-bottom pb-2">
                {userData.name}
              </h3>

              <h5 className="text-start mx-2">
                ID : #{String(userData.id).padStart(5, "0")}
              </h5>
              <h5 className="text-start mx-2">Email : {userData.email_id}</h5>
              <h5 className="text-start mx-2">
                Phone number : {userData.contact_no}
              </h5>
              <h5 className="text-start mx-2">Penalty : ${userData.penalty}</h5>

              <br />
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={UserImg}
              alt=""
              style={{ width: "100%" }}
              className="img-fluid card-img"
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="container ">
          <h4>All Transactions</h4>
          <div className="UserInfoTable border border-dark rounded pb-3">
            <div className="UserInfoRow d-flex align-items-center font-weight-bold border-bottom py-2">
              <div style={{ width: "60%" }} className="">
                <b>Book Title</b>
              </div>
              <div style={{ width: "20%" }} className="">
                <b>Borrow Date</b>
              </div>
              <div style={{ width: "10%" }} className="">
                <b>Return Date</b>
              </div>
              <div style={{ width: "10%" }} className="">
                <b>Status</b>
              </div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{ width: "60%" }} className=" text-start px-2">
                Harry Potter and Prisoner of Azkaban
              </div>
              <div style={{ width: "20%" }} className="  px-2">
                12-Apr-2024
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                -
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                <MdClose></MdClose>
              </div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{ width: "60%" }} className=" text-start px-2">
                Harry Potter and Prisoner of Azkaban
              </div>
              <div style={{ width: "20%" }} className="  px-2">
                12-Apr-2024
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                -
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                <MdClose></MdClose>
              </div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{ width: "60%" }} className=" text-start px-2">
                Harry Potter and Prisoner of Azkaban
              </div>
              <div style={{ width: "20%" }} className="  px-2">
                12-Apr-2024
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                -
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                <MdClose></MdClose>
              </div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{ width: "60%" }} className=" text-start px-2">
                Harry Potter and Prisoner of Azkaban
              </div>
              <div style={{ width: "20%" }} className="  px-2">
                12-Apr-2024
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                -
              </div>
              <div style={{ width: "10%" }} className="  px-2">
                <MdClose></MdClose>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
