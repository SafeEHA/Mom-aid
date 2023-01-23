import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import CommunityNavMenu from "./CommunityNavMenu";

const tabs = ["Community", "Posts", "Article"];
const activeStyle = {
  padding: "2px 0",
  borderBottom: "4px solid var(--lightpink)",
};

const CommunityNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h3>MOMAID</h3>
        <h3 className="pageHeader">Community</h3>
        <div className="navtabs">
          {tabs.map((tab) => {
            return (
              <NavLink
                to={`/${tab.toLowerCase()}`}
                key={tab}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {tab}
              </NavLink>
            );
          })}
        </div>
        <button
          className="hamburgerMenu"
          onClick={() => setOpenMenu((m) => !m)}
        >
          <span></span> <span></span> <span></span>
        </button>
      </nav>
      {openMenu ? <CommunityNavMenu /> : null}
    </>
  );
};

export default CommunityNav;
