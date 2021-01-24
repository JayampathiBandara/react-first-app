import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
}

/* function Header() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a> |{" "}
      <a href="/courses">Courses</a>
    </nav>
  );
} */

export default Header;
