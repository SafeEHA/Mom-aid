import { NavLink } from "react-router-dom";

const CommunityNav = () => {
  return (
    <>
      <nav className="navbar">
        <h3>MOMAID</h3>
        <div className="navtabs">
          <NavLink>Community</NavLink>
          <NavLink>Log In</NavLink>
          <NavLink>posts</NavLink>
          <NavLink>Article</NavLink>
        </div>
      </nav>
    </>
  );
};

export default CommunityNav;
