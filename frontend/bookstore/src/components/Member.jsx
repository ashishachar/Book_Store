/* eslint-disable no-unused-vars */
import React from 'react';
import "../stylesheets/Member.css";
import { MdDelete } from "react-icons/md";

function Member() {
  return (
    <div className='MBContainer'>
        <div className='MBId'>1001</div>
        <div className='MBChars'>Rancho</div>
        <div className='MBChars'>Rancho@paws.com</div>
        <div className='MBNumbers'>9876543210</div>
        <div className='MBNumbers'>Rs.100.00</div>
        <div className='MBDelete'><MdDelete /></div>
    </div>
  )
}

export default Member