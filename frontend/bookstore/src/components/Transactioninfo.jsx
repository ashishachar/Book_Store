/* eslint-disable no-unused-vars */
import React from 'react';
import "../stylesheets/Transactioninfo.css";
import Transaction from './Transaction';

function Transactioninfo() {
    const transaclist = 
    [
        {name: "Rancho", title: "1984" , borrowed: "25-05-2015", returned: "28-05-2015", Status:"Y"},
        {name: "Snoopy", title: "Ikigai" , borrowed: "02-04-2015", returned: "null", Status:"N"},
        {name: "Tippu", title: "The Notebook" , borrowed: "01-04-2015", returned: "02-04-2015", Status:"Y"},
        {name: "Mothi", title: "It ends with us" , borrowed: "03-03-2015", returned: "28-03-2015", Status:"Y"},
        {name: "Tiger", title: "Children of time" , borrowed: "25-02-2015", returned: "null", Status:"N"}
    ]
  return (
    <div className='TIContainer'>
        <div className="TIHeader">
        <h2>Transaction Info</h2>
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
                transaclist ? 
                Object.keys(transaclist).map((transac,index)=>{
                    console.log(">>>>",transaclist[transac]);
                    return (
                        <Transaction 
                            key={index} 
                            infoName={transaclist[transac].name} 
                            infoTitle={transaclist[transac].title} 
                            infoBorrow={transaclist[transac].borrowed} 
                            infoReturned={transaclist[transac].returned} 
                            infoStatus={transaclist[transac].Status}
                        />
                    )
                })
                : null

            }
        </div>
    </div>
  )
}

export default Transactioninfo