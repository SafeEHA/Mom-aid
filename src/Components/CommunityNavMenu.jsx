import { NavLink } from "react-router-dom";

const CommunityNavMenu = () => {
    let activeStyle = { padding: "2px 0", borderBottom: "4px solid #ffb3c6" };
  return (
    <ul className="navMenu">
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Community
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Article
        </NavLink>
      </li>
    </ul>
  );
};

export default CommunityNavMenu;
