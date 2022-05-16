import React from 'react';


import "./sidebar.css";


const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "sidebarItem">
          <span className = "sidebarTitle">ABOUT ME</span>
          <img className = "myPicture" src = "https://cdna.artstation.com/p/assets/images/images/012/509/152/small/wl-op-25s.jpg?1535132131" alt = "myPicture"/>
          <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          </p>
        </div>
        <div className = "sidebarItem">
          <span className = "sidebarTitle">CATEGORIES</span>
          <ul className = "sidebarList">
            <li className = "tech sidebarListItem">Tech</li>
            <li className = "life sidebarListItem">Life</li>
            <li className = "style sidebarListItem">Style</li>
            <li className = "sport sidebarListItem">Sport</li>
          </ul>
        </div>
        <div className = "sidebarItem">
          <span className = "sidebarTitle">Follow us</span>
          <div className = "sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-github-square"></i>

          </div>
        </div>
    </div>
  )
}

export default Sidebar