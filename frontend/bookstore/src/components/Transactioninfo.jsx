/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "../stylesheets/Transactioninfo.css";
import Transaction from './Transaction';
import { getTransactions } from "../utils/api-calls";
import { FaSearch } from 'react-icons/fa';
import Select from "react-select";
import { sortOpt, statusOpt } from '../utils/options';

function Transactioninfo() {
    const [transacs,setTransac]=useState([]);
    useEffect(() => {
        const dataFetch = async () => {
          let data = await getTransactions();
          setTransac(data);
        };
        dataFetch();
      }, []);

  return (
    <div className='TIContainer'>
        <div className="TIHeader">
        <h2>Transaction Info</h2>
        </div>
        <div className="TISearchContainer">
          <div className="TISearchContainer d-flex">
            <input className="TISearch" type="text" placeholder="Enter Member Name or Book Title"></input>
            <button className="TISearchBtn ms-1"> <FaSearch/></button>
          </div>
          <Select 
            className="TISelect" 
            options={statusOpt} 
            placeholder = "Select Status" 
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderWidth:2,
                borderRadius: 17,
                borderColor: 'black',
              }),
              option: (provided, state) =>({
                ...provided,
                backgroundColor: state.isSelected ? 'black' :  'white' 
              })
            }}
          />
          <Select 
            className="TISelect" 
            options={sortOpt} 
            placeholder = "Sort" 
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderWidth:2,
                borderRadius: 17,
                borderColor: 'black',
              }),
              option: (provided, state) =>({
                ...provided,
                backgroundColor: state.isSelected ? 'black' :  'white' 
              })
            }}
          />
        </div>
        <div className="TIListHeader">
          <div className='TIChars'>Member Name</div>
          <div className='TIChars'>Book Title</div>
          <div className='TIDates'>Borrowed on</div>
          <div className='TIDates'>Returned on</div>
          <div className='TIStatus'>Status</div>
        </div>
        <div className="TIList">
            {
                transacs ? 
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
                }):
                <><div className='TIEmpty'>No transactions yet!</div></>

            }
        </div>
    </div>
  )
}

export default Transactioninfo