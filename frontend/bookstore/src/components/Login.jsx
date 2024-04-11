/* eslint-disable no-unused-vars */
import "../stylesheets/Login.css"
import React from 'react';

function Login() {
  return (
    <div className="LIContent1">
        <div className="LIOrgTitle">ABC Book Store</div>
        <div className="LIContent2">
            <div className="LIContent3">
                <p>Login</p>
                <input className="LIUserName" type="text" placeholder="Enter user name"></input><br/>
                <input className="LIUserName" type="password" placeholder="Enter password"></input><br/>
                <button className="LILoginBtn">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login