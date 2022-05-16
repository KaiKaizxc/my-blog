import React from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  return (
    <div className = "login">
        <span className = "loginTitle">Login Title</span>
        <form className = "loginForm">
            <label for = "email">Email</label>
            <input className = "loginInput" type = "text" placeholder = " Kai@google.com ^_^" id = "email"></input>
            <label for = "password">Password</label>
            <input className = "loginInput" type = "password" placeholder = "Password123"></input>
            <button className = "loginButton">Login</button>
        </form>
        <button className = "loginRegisterButton" onClick = { () => {
          navigate("/register")
        }}>Register</button>
    </div>
  )
}

export default Login