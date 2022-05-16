import React from 'react'

import "./post.css";

const Post = () => {
  return (
    <div className = "post">
        <img 
        className = "postImg"
        src = "https://cdnb.artstation.com/p/assets/images/images/040/163/941/medium/wlop-16se.jpg?1628051549"
        alt = "post"/>
        <div className = "postInfo">
            <div className = "postCats">
                <span className = "postCat">Music</span>
                <span className = "postCat">Life</span>
            </div>
            <span className = "postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className = "postDate">1 hour ago</span>
        </div>
        <p className = "postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem perferendis, illo id eius distinctio excepturi blanditiis laudantium recusandae, 
            quo quibusdam similique nisi voluptates hic nobis provident, eligendi praesentium temporibus facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem perferendis, illo id eius distinctio excepturi blanditiis laudantium recusandae, 
            quo quibusdam similique nisi voluptates hic nobis provident, eligendi praesentium temporibus facere.            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem perferendis, illo id eius distinctio excepturi blanditiis laudantium recusandae, 
            quo quibusdam similique nisi voluptates hic nobis provident, eligendi praesentium temporibus facere.            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem perferendis, illo id eius distinctio excepturi blanditiis laudantium recusandae, 
            quo quibusdam similique nisi voluptates hic nobis provident, eligendi praesentium temporibus facere.
        </p>
    </div>
  )
}

export default Post