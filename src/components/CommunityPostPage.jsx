import React from "react";

const CommunityPostPage = () => {
  return (
    <>
    <div className="_header">
    <h2 className="title-header">Post</h2>
    <p>Menu</p>
  </div>
    <div className="_container">
     
      <div>
        <p>
          Create a post and start a new thread in the Momaid support community.
        </p>
        <div>
          <input
            type="text"
            className="field-subject"
            placeholder="Post Subject"
          />
        </div>
        <div>
          <textarea placeholder="Type a message" className="field-message">
            </textarea>
        </div>
        <div className="form-buttons">
        <button className="_btn" type="button">
        Post
      </button>
      <button className="_btn2">Cancel</button>
        </div>
      </div>
     
      <div className="btm-text">
        <p>
          You can also chose to make your posts anonymously, but your post will
          be vetted for approval to prevent any form of threat harassment or
          abuse.
        </p>
        <div className="btm-checker">
        <input type="checkbox" />
        <label>Post anonymously</label>
        </div>
      </div>
    </div>
    </>
  );
};

export default CommunityPostPage;
