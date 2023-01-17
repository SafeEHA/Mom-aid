import React from "react";

const CommunitySearch = () => {
  return (
    <>
    <div className="SearchLabel">
      <label>Search</label>
      <input
        type="text"
        placeholder="Search Topics"
        style={{
          padding: "8px",
          border: "2px solid var(--lightpink)",
          borderRadius: "8px",
          width: "20rem",
          marginLeft: "10px",
        }}
      />
      </div>
      <button className="btn" style={{ width: "10rem", height: "2.2rem" }}>
        New Post
      </button>
    </>
  );
};

export default CommunitySearch;
