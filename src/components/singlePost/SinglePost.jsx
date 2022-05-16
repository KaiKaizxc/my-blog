import React from 'react'
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className = "singlePost">
        <div className = "singlePostWrapper">
            <img 
            className = "postImage"
            src = "https://cdnb.artstation.com/p/assets/images/images/040/163/941/large/wlop-16se.jpg?1628051549"
            alt = "postImage"
            />
            <h1 className = "singlePostTitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <div className = "singlePostEdit">
                    <i className ="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-eraser"></i>
                </div>
            </h1>
            <div className = "singlePostInfo">
                <span className = "singlePostAuthor">Author: <b>Kai</b></span>
                <span className = "singlePostDate">1 hour ago</span>
            </div>
            <p className = "singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea tempore architecto labore delectus, tenetur repellat ratione fuga sunt voluptate asperiores. Commodi laborum voluptatem, delectus rem recusandae labore alias dolor?
            </p>

                
        </div>
    </div>
  )
}

export default SinglePost