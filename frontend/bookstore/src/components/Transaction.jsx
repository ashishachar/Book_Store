/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../stylesheets/Transaction.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";


function Transaction({infoName, infoTitle, infoBorrow, infoReturned, infoStatus}) {
    const tranacstatus=infoStatus;
  return (
    <div className='TSContainer'>
        <div className='TSChars'>{infoName}</div>
        <div className='TSChars'>{infoTitle}</div>
        <div className='TSDates'>{infoBorrow}</div>
        <div className='TSDates'>{infoReturned}</div>
        <div className='TSStatus'>{tranacstatus=="Y"?<FaCheckCircle className="TSDone"/>:<IoMdCloseCircle className='TSPending' />}</div>
    </div>
  )
}

export default Transaction