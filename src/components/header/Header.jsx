import React from 'react';
import "./header.css";




const Header = () => {
  return (
    <div className = "header">
      <div className = "headerTitles">
        <span className = "headerTitleSm">Kai's</span>
        <span className = "headerTitleLg">Blog</span>
      </div>
      <img 
      className = "headerImg"
      src = "https://cdnb.artstation.com/p/assets/images/images/001/528/223/medium/wl-op-3m.jpg?1448025162"
      alt = "myImage"
      />
      
    </div>
  );
}

export default Header