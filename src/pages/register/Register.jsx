import React from 'react'
import "./register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  return (
    <div className = "register">
        <span className = "registerTitle">Login Title</span>
        <form className = "registerForm">
            <label for = "username">Username</label>
            <input type = "text" className = "registerInput" placeholder = "Ghost"></input>
            <label for = "email">Email</label>
            <input className = "registerInput" type = "text" placeholder = " Kai@google.com ^_^" id = "email"></input>
            <label for = "password">Password</label>
            <input className = "registerInput" type = "password" placeholder = "Password123"></input>
            <button className = "registerButton">Register</button>
        </form>
        <button className = "registerLoginButton" onClick = { () => {
          navigate('/login')
        }}>Login</button>
    </div>
  )
}

export default Register