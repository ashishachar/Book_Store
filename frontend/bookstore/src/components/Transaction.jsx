/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../stylesheets/Transaction.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { getBookByID, getMemberByID } from '../utils/api-calls';


function Transaction({infoMemb, infoBook, infoBorrow, infoReturned, infoStatus}) {
    
    
      
  return (
    <div className='TSContainer'>
        <div className='TSChars'>{infoMemb}</div>
        <div className='TSChars'>{infoBook}</div>
        <div className='TSDates'>{infoBorrow}</div>
        <div className='TSDates'>{infoReturned}</div>
        <div className='TSStatus'>
            {infoStatus == true ?
                <FaCheckCircle className="TSDone"/>:
                <IoMdCloseCircle className='TSPending' />
            }
        </div>
    </div>
  )
}

export default Transaction