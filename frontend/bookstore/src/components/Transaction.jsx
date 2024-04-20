/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../stylesheets/Transaction.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { getBookByID, getMemberByID } from '../utils/api-calls';


function Transaction({infoMemb, infoBook, infoBorrow, infoReturned, infoStatus}) {
    const tranacstatus=infoStatus;
    console.log()
    const [member,setMember] = useState([]);
    const [book,setBook] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
          let mdata = await getMemberByID(infoMemb);
          let bdata = await getBookByID(infoBook);
          setMember(mdata);
          setBook(bdata);
        };
        dataFetch();
      }, []);
      
  return (
    <div className='TSContainer'>
        <div className='TSChars'>{member.name}</div>
        <div className='TSChars'>{book.title}</div>
        <div className='TSDates'>{infoBorrow}</div>
        <div className='TSDates'>{infoReturned}</div>
        <div className='TSStatus'>
            {tranacstatus == true ?
                <FaCheckCircle className="TSDone"/>:
                <IoMdCloseCircle className='TSPending' />
            }
        </div>
    </div>
  )
}

export default Transaction