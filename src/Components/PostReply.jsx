import React from "react";
import { useState } from "react";


const PostReply = () => {
  const[isOpen, setIsOpen] = useState(false);

  const openModal= () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div className="modal-bg">
      <button onClick={openModal} >Open modal</button>
      {isOpen && (
      <div className="modalbox">
        <div className="heading">
          <h3>Replies</h3>
          <span onClick={closeModal} className="close">&times;</span>
        </div>
        <div className="reply-text">
          <div className="user-name">
            <div className="circle">M</div>
            <h6>By MommaBear</h6>
          </div>
          <p>
            I would advice you start with the standard size which is 24-27mm and
            for brands, i use adeva but i don’t know where you can get it in
            Abuja as i have never been there.
          </p>
        <div className="like-btn-icon"></div>

          <div className="user-name">
            <div className="circle">K</div>
            <h6>By Kaycee</h6>
          </div>
          <p>
            I got mine from a baby store at wuse market about 3 months ago, the
            owner of the store is a nurse, was very helpful.
          </p>
        <div className="like-btn-icon"></div>

        <div className="user-name">
            <div className="circle">N</div>
            <h6>By Kaycee</h6>
          </div>
          <p>
            I got mine from a baby store at wuse market about 3 months ago, the
            owner of the store is a nurse, was very helpful.
          </p>
        <div className="like-btn-icon"></div>

        </div>
      
        <div className="reply-btn-icon">
          <div>
            <input type="text" className="reply-field" placeholder="reply" />
          </div>
        </div>
      </div>
)}
    </div>
  );
};
export default PostReply;
