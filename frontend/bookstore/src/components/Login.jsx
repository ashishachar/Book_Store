/* eslint-disable no-unused-vars */
import "../stylesheets/Login.css"
import React from 'react';
import { axios , dbURL  } from "../utils/api-calls";
import {useState , useEffect} from 'react';
import {redirect, useNavigate} from 'react-router-dom';

function Login() {
  const [info , setInfo] = useState({user : '' , password : ''});
  const navigate = useNavigate();
  useEffect(()=>{
    let loggedIn = localStorage.getItem('usr');
    if(loggedIn)
    {
      navigate('/home');
    }
  } , []);

  const onSubmitMeth =()=>{
    console.log('Loggin check : ',info.user);
    const loginMeth = async ()=>{
      await axios.post(dbURL+"/admins/" , info).then(res=>{
        // console.log(res.data.state);
        if(res && res.data.state)
        {
          localStorage.setItem('usr' , info.user );
          navigate('/home');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>{
        // console.log(err);
      })
      // console.log(data);
    }
    loginMeth();
  }
  return (
    <div className="LIContent1">
        <div className="LIOrgTitle"></div>
        <div className="LIContent2">
            <div className="LIHeader">ABC Book Store</div>
            <div className="LIContent3">
                <p>Login</p>
                <input className="LIUserName" type="text" placeholder="Enter User Name" value={info.user} 
                onChange={(e)=>{setInfo({...info , user : e.target.value})}}></input><br/>
                <input className="LIUserName" type="password" placeholder="Enter Password" value={info.password}
                onChange={(e)=>{setInfo({...info , password : e.target.value})}}></input><br/>
                <button className="LILoginBtn" onClick={onSubmitMeth}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login