import React from 'react'
import './write.css';

const Write = () => {
  return (
    <div className = "write">
        <img 
        className = "writeImg"
        src = "https://cdnb.artstation.com/p/assets/images/images/040/163/941/large/wlop-16se.jpg?1628051549"
        alt = "writeImg"/>
        <form className = "writeForm">
            <div className = "writeFormGroup">
                <label for = "fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type = "file" id = "fileInput" style = {{display: "none"}}/>
                <input type = "text" placeholder = "Title" className = "writeInput" autoFocus = {true}/>
                
            </div>
            <div className = "writeFormGroup">
                <textarea placeholder = "Tell your story..." type = "text" className = "writeInput writeText"></textarea>
            </div>
            <button className = "writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write