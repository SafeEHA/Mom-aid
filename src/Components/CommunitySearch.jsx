import React from "react";

const CommunitySearch = ({ search, setSearch }) => {
  return (
    <>
      <div className="SearchLabel">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search Topics"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="btn">New Post</button>
    </>
  );
};

export default CommunitySearch;
