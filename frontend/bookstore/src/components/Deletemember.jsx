/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import "../stylesheets/Deletemember.css";
import { Link } from 'react-router-dom';

function Deletemember({ closeModal, membData}) {
    const [success,setSuccess] = useState(false);

    async function deleteMember(){
        console.log(membData);
        setSuccess(true);
    }

    function refreshPage(){
        window.location.reload();
    }

  return (
    <div className='DMBackground'>
    <div className='DMModal'>
        { success == false ? 
        <>
          <div className='DMBtnConatiner'>
            <button className="DMClose" onClick={()=>{closeModal(false)}}>X</button><br/>
          </div>
          
          <br/><div>Are you sure you want to delete the member {membData.name} ?</div>
          <button className="DMDelete" onClick={deleteMember}>Delete</button>
          <button className="DMDelete" onClick={refreshPage}>Cancel</button>
        </>:
        <>
          <br/><div>Member deleted successfully!</div><br />
          <Link to="/members/"><button className='DMDelete'>OK</button></Link>
        </>
        }
    </div>
</div>
  )
}

export default Deletemember