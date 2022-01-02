import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";
import { MyBtn } from "../btn/MyBtn";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const Navbar = () => {
  const {auth, setAuth} = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
    delete localStorage.auth;
  }

  return (
    <div className="navbar">
      {auth ? <MyBtn onClick={logout}>Log out</MyBtn> : null}
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
