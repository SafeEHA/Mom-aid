import React from "react";

const CommunitySearch = () => {
  return (
    <>
      <div className="SearchLabel">
        <label>Search</label>
        <input type="text" placeholder="Search Topics" />
      </div>
      <button className="btn">New Post</button>
    </>
  );
};

export default CommunitySearch;
