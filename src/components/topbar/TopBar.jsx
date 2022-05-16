import React from 'react'
import "./topbar.css";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    console.log("hi")
    let navigate = useNavigate();
    let user = false;
  return (
    <div className = "top">
        <div className = "topleft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github-square"></i>
        </div>
        
        <div className = "topcenter">
            <ul className = "topList">
                <li className = "topListItem" onClick = { () => {
                    navigate("/")
                } }>HOME</li>
                <li className = "topListItem" onClick = { () => {
                    navigate("/")
                }}>ABOUT</li>
                <li className = "topListItem" onClick = { () => {
                    navigate("/")
                }}>CONTACT</li>
                <li className = "topListItem" onClick = { () => {

                }}>WRITE</li>
                <li className = "topListItem" onClick = { () => {

                }}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className = "topright">
            {
                user ? (
                    <img className = "kaipic" src = "https://cdna.artstation.com/p/assets/images/images/037/291/422/large/wlop-33se.jpg?1620016916" alt = "Kai"/>
                ) : (
                    <ul className = "topList">
                        <li className = "topListItem" onClick = { () => {
                            navigate("/login")
                        }}>LOGIN</li>
                        <li className = "topListItem" onClick = { () => {
                            navigate("/register")
                        }}>Register</li>
                    </ul>
                )
            }

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar