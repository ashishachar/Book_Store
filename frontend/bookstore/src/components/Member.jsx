/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../stylesheets/Member.css";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Member({infoId, infoName, infoEmail, infoPhone, infoPenalty}) {
  return (
    <Link to={'/members/'+Number(infoId).toString()}>
      
    <div className='MBContainer '>
        <div className='MBId'>{infoId}</div>
        <div className='MBChars'>{infoName}</div>
        <div className='MBChars'>{infoEmail}</div>
        <div className='MBNumbers'>{infoPhone}</div>
        <div className='MBNumbers'>Rs.{infoPenalty}</div>
        <div className='MBDelete'><MdDelete /></div>
    </div>
    </Link>
  )
}

export default Member