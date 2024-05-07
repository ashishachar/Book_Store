/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import UserImg from "../assets/user.png";
// import { FaCheck } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { getMemberByID, getTransactionsByMembId } from "../utils/api-calls";
import Updatemember from './Updatemember';
import Deletemember from './Deletemember';
import Transaction from './Transaction';
import Header from './Header';


function UserInfo() {
  const { infoId } = useParams();
  const [member,setMember] = useState([]);
  const [transacs, setTransac] = useState([]);
  const [openEdit, setOpen] = useState(false);
  const [openDelete,setDelete] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      let mdata = await getMemberByID(infoId);
      setMember(mdata);
    };
    dataFetch().then(async()=>{
      // console.log("----",member);
      let tdata = await getTransactionsByMembId(infoId);
      setTransac(tdata);
    });
  }, []);
  // console.log(">>>>",transacs);

  // console.log("dbhdgf",member);
  return (
    <div className="container">
      <Header />
      <div className="container bg-dark border rounded mt-3">
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
              style={{ width: "100%" }}
              className="img-fluid card-img"
            />
            <div className='d-flex justify-content-center'>
              <button className="bg-white text-dark m-1 w-50" onClick={()=>{setOpen(true)}}>
                Edit
              </button>   
              <button className="bg-white text-dark m-1 w-50" onClick={()=>{setDelete(true)}}>
                Delete
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
      {
        transacs.length != 0 ?
        <>
          <div className="mt-3">
            <div className="container p-0">
              <h4>All Transactions</h4>
              <div className="TIListHeader">
                <div className='TIChars'>Member Name</div>
                <div className='TIChars'>Book Title</div>
                <div className='TIDates'>Borrowed on</div>
                <div className='TIDates'>Returned on</div>
                <div className='TIStatus'>Status</div>
              </div>
              <div className="TIList">
                {
                    Object.values(transacs).map((transac,index)=>{
                        // console.log(">>>>",transac);
                        return (
                            <Transaction
                                key={index} 
                                infoMemb={transac.memb} 
                                infoBook={transac.book} 
                                infoBorrow={transac.borrow_date} 
                                infoReturned={transac.return_date} 
                                infoStatus={transac.status}
                            />
                        )
                    })
                }
              </div>
            </div>
          </div>
        </>:
        <><div className='h4 mt-5'>No Transactions yet!</div></>
      }
      

{/* //           <div className="UserInfoTable border border-dark rounded pb-3">
//             <div className="UserInfoRow d-flex align-items-center font-weight-bold border-bottom py-2">
//               <div style={{ width: "60%" }} className="">
//                 <b>Book Title</b>
//               </div>
//               <div style={{ width: "15%" }} className="">
//                 <b>Borrow Date</b>
//               </div>
//               <div style={{ width: "15%" }} className="">
//                 <b>Return Date</b>
//               </div>
//               <div style={{ width: "10%" }} className="">
//                 <b>Status</b>
//               </div>
//             </div>
//             <div className="UserInfoRow d-flex align-items-center font-weight-bold">
//               <div style={{ width: "60%" }} className=" text-start px-2">
//                 Harry Potter and Prisoner of Azkaban
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 12-Apr-2024
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 -
//               </div>
//               <div style={{ width: "10%" }} className="  px-2">
//                 <MdClose></MdClose>
//               </div>
//             </div>
//             <div className="UserInfoRow d-flex align-items-center font-weight-bold">
//               <div style={{ width: "60%" }} className=" text-start px-2">
//                 Harry Potter and Prisoner of Azkaban
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 12-Apr-2024
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 -
//               </div>
//               <div style={{ width: "10%" }} className="  px-2">
//                 <MdClose></MdClose>
//               </div>
//             </div>
//             <div className="UserInfoRow d-flex align-items-center font-weight-bold">
//               <div style={{ width: "60%" }} className=" text-start px-2">
//                 Harry Potter and Prisoner of Azkaban
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 12-Apr-2024
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 -
//               </div>
//               <div style={{ width: "10%" }} className="  px-2">
//                 <MdClose></MdClose>
//               </div>
//             </div>
//             <div className="UserInfoRow d-flex align-items-center font-weight-bold">
//               <div style={{ width: "60%" }} className=" text-start px-2">
//                 Harry Potter and Prisoner of Azkaban
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 12-Apr-2024
//               </div>
//               <div style={{ width: "15%" }} className="  px-2">
//                 -
//               </div>
//               <div style={{ width: "10%" }} className="  px-2">
//                 <MdClose></MdClose>
//               </div> */}

            
      {openEdit && <Updatemember closeModal={setOpen} membData={member}/>}
      {openDelete && <Deletemember closeModal={setDelete} membData={member}/>}

    </div>
  );
}

export default UserInfo;
