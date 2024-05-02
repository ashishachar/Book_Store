/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import "../stylesheets/Deletemember.css";
import { Link } from 'react-router-dom';
import { deleteMemberById } from '../utils/api-calls';

function Deletemember({ closeModal, membData}) {
    const [success,setSuccess] = useState(false);

    async function deleteMember(){
      await deleteMemberById(membData.id).then(()=>{
        setSuccess(true);
      });
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
          
          <br/><div><h5>Are you sure you want to delete the member {membData.name} ?</h5></div>
          <button className="DMDelete" onClick={deleteMember}>Delete</button>
          <button className="DMDelete" onClick={refreshPage}>Cancel</button>
        </>:
        <>
          <br/><div><h5>Member deleted successfully!</h5></div><br />
          <Link to="/members/"><button className='DMDelete'>OK</button></Link>
        </>
        }
    </div>
</div>
  )
}

export default Deletemember