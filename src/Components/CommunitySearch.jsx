import React from "react";

const CommunitySearch = () => {
  return (
    <>
      <label>Search</label>
      <input
        type="text"
        placeholder="Search Topics"
        style={{
          padding: "8px",
          border: "2px solid var(--grey)",
          borderRadius: "8px",
          width: "20rem",
        }}
      />
      <button className="btn" style={{ width: "10rem", height: "2.2rem" }}>
        New Post
      </button>
    </>
  );
};

export default CommunitySearch;
