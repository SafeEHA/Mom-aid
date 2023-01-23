import React from "react";
import { Link } from "react-router-dom";

const CommunitySearch = () => {
  return (
    <>
      <div className="SearchLabel">
        <label>Search</label>
        <input type="text" placeholder="Search Topics" />
      </div>
      <Link to="/post" className="community__postbutton">
        New Post
      </Link>
    </>
  );
};

export default CommunitySearch;
