import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav style={{ width: "100%", display: "flex", justifyContent: "center", background: "green", padding: "20px"}}>
      <div style={{width: "70%", display: "flex", justifyContent: "space-around"}}>
        <Link to="/">Main page</Link>
        <Link to="users">Users</Link>
        <Link to="tasks">Tasks</Link>
      </div>
    </nav>
  );
};
