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
    const [showList, setShowList] = useState([]);
    const [search, setSearch] = useState({
      searchKey: "",
      statusKey: statusOpt[0],
      sortKey: sortOpt[0]
    });

    const filterMethod =(e)=>{
      console.log('Filter method : ',e.target.value);
      setSearch({...search , searchKey : e.target.value});
      let resList = [];
      if (e.target.value != "") {
        transacs.map((transac) => {
          if (
            transac.member_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            transac.book_title
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) 
          ){
              console.log(transac);
              resList.push(transac);
          }
        });
      } else {
        console.log('Empty',showList);
        resList = transacs;
      }
      setShowList(resList);
    }

    const statusMethod = (e) => {
      console.log('Status');
      let resList = [];
      if (search.searchKey != "") {
        transacs.map((transac) => {
          if (
            transac.member_name.toLowerCase().includes(search.searchKey.toLowerCase()) ||
            transac.book_title
              .toLowerCase()
              .includes(search.searchKey.toLowerCase()) 
          ) {
            console.log(transac);
            resList.push(transac);
          }
        });
      } else {
        resList = transacs;
      }
      setSearch({ ...search, statusKey: e });
      let result = [];
      if (statusOpt[1].value == e.value) {
        console.log(statusOpt[1].value)
        resList.map((res)=>{
          if(res.status == false){
            result.push(res)
          }
        });
      } else if (statusOpt[2].value == e.value) {
        console.log(statusOpt[2].value)
        resList.map((res)=>{
          if(res.status == true){
            result.push(res)
          }
        });
      } else {
        result = resList;
      }
      setShowList(result);
      console.log(">>>",showList);
    };
    

    useEffect(() => {
      const dataFetch = async () => {
        let data = await getTransactions();
        setTransac(data);
        setShowList(data);
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
            <input 
            value={search.searchKey}
            onChange={(e) => {
              filterMethod(e)
            }}
            className="TISearch" 
            type="text" 
            placeholder="Enter Member Name or Book Title">
            </input>
            <button className="TISearchBtn ms-1"> <FaSearch/></button>
          </div>
          <Select 
            className="TISelect" 
            options={statusOpt} 
            placeholder = "Select Status" 
            value={search.statusKey}
            onChange={(e) => {
              statusMethod(e);
            }}
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
                showList ? 
                Object.values(showList).map((transac,index)=>{
                    // console.log(">>>>",transac);
                    return (
                        <Transaction 
                            key={index} 
                            infoMemb={transac.member_name} 
                            infoBook={transac.book_title} 
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