import { useState } from "react";
import { NavLink } from "react-router-dom";
import CommunityNavMenu from "./CommunityNavMenu";

const CommunityNav = () => {
  let activeStyle = { padding: "2px 0", borderBottom: "4px solid var(--lightpink)" };

  const [openMenu, setOpenMenu]=useState(false)
  return (
    <>
      <nav className="navbar">
        <h3>MOMAID</h3>
        <h3 className="pageHeader">Community</h3>
        <div className="navtabs">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Community
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Posts
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Article
          </NavLink>
        </div>
        <button className="hamburgerMenu" onClick={()=>setOpenMenu(m=>!m)}>
          <span></span> <span></span> <span></span>
        </button>
      </nav>
     {openMenu? <CommunityNavMenu />:null}
    </>
  );
};

export default CommunityNav;