/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import UserImg from "../assets/user.png";
// import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { getMemberByID } from "../utils/api-calls";

function UserInfo() {
  const { infoId } = useParams();
  const [member,setMember] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      let mdata = await getMemberByID(infoId);
      setMember(mdata);
    };
    dataFetch();
  }, []);
  
  return (
    <>
      <div className="container bg-dark border rounded">
        <div className="row">
          <div className="col-md-8">
            <div className=" bg-white text-dark rounded m-4">
              <br />
              <h3 className="text-start mx-2 border-bottom pb-2">{member.name}</h3>
              
              <h5 className="text-start mx-2">ID : #0000{member.id}</h5>
              <h5 className="text-start mx-2">Email : {member.email_id}</h5>
              <h5 className="text-start mx-2">Phone number : {member.contact_no}</h5>
              <h5 className="text-start mx-2">Penalty : {member.penalty}</h5>

              <br />
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={UserImg}
              alt=""
              style={{ width: "50%" }}
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
              <div style={{width : "60%"}} className=""><b>Book Title</b></div>
              <div style={{width : "20%"}} className=""><b>Borrow Date</b></div>
              <div style={{width : "10%"}} className=""><b>Return Date</b></div>
              <div style={{width : "10%"}} className=""><b>Status</b></div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{width : "60%"}} className=" text-start px-2">Harry Potter and Prisoner of Azkaban</div>
              <div style={{width : "20%"}} className="  px-2">12-Apr-2024</div>
              <div style={{width : "10%"}} className="  px-2">-</div>
              <div style={{width : "10%"}} className="  px-2">
                  <MdClose></MdClose>
              </div>
            </div>
            <div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{width : "60%"}} className=" text-start px-2">Harry Potter and Prisoner of Azkaban</div>
              <div style={{width : "20%"}} className="  px-2">12-Apr-2024</div>
              <div style={{width : "10%"}} className="  px-2">-</div>
              <div style={{width : "10%"}} className="  px-2">
                  <MdClose></MdClose>
              </div>
            </div><div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{width : "60%"}} className=" text-start px-2">Harry Potter and Prisoner of Azkaban</div>
              <div style={{width : "20%"}} className="  px-2">12-Apr-2024</div>
              <div style={{width : "10%"}} className="  px-2">-</div>
              <div style={{width : "10%"}} className="  px-2">
                  <MdClose></MdClose>
              </div>
            </div><div className="UserInfoRow d-flex align-items-center font-weight-bold">
              <div style={{width : "60%"}} className=" text-start px-2">Harry Potter and Prisoner of Azkaban</div>
              <div style={{width : "20%"}} className="  px-2">12-Apr-2024</div>
              <div style={{width : "10%"}} className="  px-2">-</div>
              <div style={{width : "10%"}} className="  px-2">
                  <MdClose></MdClose>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
