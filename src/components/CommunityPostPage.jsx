import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const CommunityPostPage = () => {
  const [handlePost, setHandlePost] = useState({
    title: "",
    content:"",
    image:"",
    likes: 0,
  });
  const { handleSubmit } = useContext(PostContext);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHandlePost((prevPosts) => ({
          ...prevPosts,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="_header">
        <h2 className="title-header">Post</h2>
        <p>Menu</p>
      </div>
      <div className="_container">
        <div>
          <p>
            Create a post and start a new thread in the Momaid support
            community.
          </p>
          <div>
            <input
              type="text"
              className="field-subject"
              placeholder="Post Subject"
              onChange={(e) => {
                setHandlePost((prevPost) => ({ ...prevPost, title: e.target.value}));
              }}
            />
          </div>
          <div>
            <input 
            type="file"
            className="field-subject"
            placeholder="Choose file"
            accept="image/*"
            onChange={handleImageChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Type a message"
              className="field-message"
              onChange={(e) => {
                setHandlePost((prevPost) => ({ ...prevPost, content: e.target.value}));
              }}
            ></textarea>
          </div>
          <div className="form-buttons">
            <button className="_btn" type="button"
            onClick={() => {
              handleSubmit(handlePost);
            }}
            >
              Post
            </button>
            <button className="_btn2">Cancel</button>
          </div>
        </div>

        <div className="btm-text">
          <p>
            You can also chose to make your posts anonymously, but your post
            will be vetted for approval to prevent any form of threat harassment
            or abuse.
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
