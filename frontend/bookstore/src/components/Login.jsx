/* eslint-disable no-unused-vars */
import "../stylesheets/Login.css"
import React from 'react';
import { axios , dbURL  } from "../utils/api-calls";
import {useState , useEffect} from 'react';
import {redirect, useNavigate} from 'react-router-dom';
import { FaQuestionCircle } from "react-icons/fa";

function Login() {
  const [info , setInfo] = useState({user : '' , password : ''});
  const [hint,setHint] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    let loggedIn = localStorage.getItem('usr');
    if(loggedIn)
    {
      navigate('/home');
    }
  } , []);

  const onSubmitMeth =(e)=>{
    e.preventDefault();
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
      <div className="LIOrgTitle d-none d-md-block rounded w-100"></div>
      <div className="LIContent2">
        <div className="LIContent3">
          <form action="">
            <div>
              Login{" "}
              <FaQuestionCircle
                className=" small"
                aria-label="Hove over this"
                onClick={()=>{setHint(!hint)}}
              />
            </div>
            <input
              className="LIUserName px-1"
              type="text"
              placeholder="Enter User Name"
              autoComplete="off"
              value={info.user}
              onChange={(e) => {
                setInfo({ ...info, user: e.target.value });
              }}
            ></input>
            <br />
            <input
              className="LIUserName px-1"
              type="password"
              autoComplete="off"
              placeholder="Enter Password"
              value={info.password}
              onChange={(e) => {
                setInfo({ ...info, password: e.target.value });
              }}
            ></input>
            <br />
            <button className="LILoginBtn" onClick={(e)=>onSubmitMeth(e)}>
              Login
            </button>
          </form>
          {hint ? (
            <h6 className="bg-dark text-dark p-0">{"Try : admin/password"}</h6>
          ) : (
            <h6 className="bg-dark text-white p-0">Try : admin/password</h6>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login