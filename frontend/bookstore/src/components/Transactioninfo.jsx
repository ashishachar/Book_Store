/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "../stylesheets/Transactioninfo.css";
import Transaction from './Transaction';
import Header from './Header';
import { getTransactions } from "../utils/api-calls";
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";
import Select from "react-select";
import { sortOpt, statusOpt } from '../utils/options';

function Transactioninfo() {
    const [transacs,setTransac]=useState([]);
    const [showList, setShowList] = useState([]);
    const [search, setSearch] = useState({
      searchKey: "",
      statusKey: "",
      sortKey: ""
    });

    useEffect(()=>{
      let resList = [];
      if (search.searchKey != "") {
        transacs.map((transac) => {
          if (
            transac.member_name.toLowerCase().includes(search.searchKey.toLowerCase()) ||
            transac.book_title
              .toLowerCase()
              .includes(search.searchKey.toLowerCase()) 
          ){
              console.log(transac);
              resList.push(transac);
          }
        });
      } else {
        // console.log('Empty',showList);
        resList = transacs;
      }
      setShowList(resList);
      let result = [];
      if (statusOpt[1].value == search.statusKey) {
        console.log(statusOpt[1].value)
        resList.map((res)=>{
          if(res.status == false){
            result.push(res)
          }
        });
      } else if (statusOpt[2].value == search.statusKey) {
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
      let finalres = [];
      if(sortOpt[0].value == search.sortKey){
        // console.log("Descending");
        finalres = result.sort((a,b)=>{
          return a.borrow_date.localeCompare(b.borrow_date);
        })
      }else if(sortOpt[1].value == search.sortKey){
        // console.log("Ascending");
        finalres = result.sort((a,b)=>{
          return b.borrow_date.localeCompare(a.borrow_date);
        })
      }else{
        finalres = result;
      }
      setShowList(finalres);
      // console.log(">>>",showList);
    },[search]);

    

    useEffect(() => {
      const dataFetch = async () => {
        let data = await getTransactions();
        setTransac(data);
        setShowList(data);
      };
      dataFetch();
    }, []);
    
  return (
    <div className='TIContainer container'>
        <Header />
        <div className="TIHeader rounded mt-2">
        <h4>Transaction Info</h4>
        </div>
        <div className="TISearchContainer">
          <div className="TISearchContainer d-flex">
            <div className="TISearchBtn ms-1"> <FaSearch/></div>
            <input 
            value={search.searchKey}
            onChange={(e) => {
              setSearch({ ...search, searchKey: e.target.value })
            }}
            className="TISearch" 
            type="text" 
            placeholder="Enter Member Name or Book Title">
            </input>
          </div>
          <div className="TISearchContainer d-flex">
            <div className="TISearchBtn ms-1"> <FaFilter/></div>
          <Select 
            className="TISelect" 
            options={statusOpt} 
            placeholder = "Select Status" 
            // value={search.statusKey}
            onChange={(e) => {
              setSearch({ ...search, statusKey: e.value })
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderWidth:2,
                borderTopRightRadius: 17,
                borderBottomRightRadius: 17,
                borderColor: 'black',
                height: 40
              }),
              option: (provided, state) =>({
                ...provided,
                backgroundColor: state.isSelected ? 'black' :  'white' 
              })
            }}
          />
          </div>
          <div className="TISearchContainer d-flex">
          <div className="TISearchBtn ms-1 fw-bolder"> <TbArrowsSort/></div>
          <Select 
            className="TISelect" 
            options={sortOpt} 
            placeholder = "Sort" 
            // value={search.sortKey}
            onChange={(e) => {
              setSearch({ ...search, sortKey: e.value })
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderWidth:2,
                borderTopRightRadius: 17,
                borderBottomRightRadius: 17,
                borderColor: 'black',
              }),
              option: (provided, state) =>({
                ...provided,
                backgroundColor: state.isSelected ? 'black' :  'white' 
              })
            }}
          />
          </div>
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