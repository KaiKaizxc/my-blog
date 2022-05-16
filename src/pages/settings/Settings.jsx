import React from 'react';
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className = "settings">
        <div className = "settingsWrapper">
          <div className = "settingsTitle">
            <span className = "settingsUpdateTitle">Update Your Account</span>
            <span className = "settingsDeleteTitle">Delete Account</span>
          </div>
          <form className ="settingsForm">
            <label>Profile Picture</label>
            <div className = "settingsPP">
              <img 
                className = "myProfilePicture"
                src = "https://cdna.artstation.com/p/assets/images/images/037/291/422/large/wlop-33se.jpg?1620016916"
                alt = "myProfilePicture"
              />
              <label for ="fileInput" >
                <i className = "settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type = "file" id = "fileInput" style = {{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type = "text" placeholder = "Kai" />
            <label>Email</label>
            <input type = "email" placeholder = "Kai@google.com" />
            <label>Password</label>
            <input type = "text" placeholder = "password123" />
            <button className = "settingsSubmit">Update</button>

          </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings