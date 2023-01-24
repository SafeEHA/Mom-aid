import React from "react";
import { Link } from "react-router-dom";

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

      <Link to="/post" className="community__postbutton">
        New Post
      </Link>

    </>
  );
};

export default CommunitySearch;
