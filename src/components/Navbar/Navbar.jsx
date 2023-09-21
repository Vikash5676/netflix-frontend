import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Netflix-Logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";

const Navbar = ({ scroll }) => {
  const handleClick = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav
      className={`main-nav ${
        scroll >= 30 ? "nav-bg-black" : "nav-bg-transparent"
      }`}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"} className="nav-logo">
            <img src={logo} alt="" />
          </Link>
          <div className="nav-menus">
            <Link to={"/"} className="menu">
              Home
            </Link>
            <Link to={"/tv-show"} className="menu">
              Tv show
            </Link>
            <Link to={"/movies"} className="menu">
              Movies
            </Link>
            <Link to={"/my-list"} className="menu">
              My List
            </Link>
            <Outlet />
          </div>
        </div>
        <div className="nav-right">
          <BsSearch className="nav-search" />

          <AiOutlinePoweroff className="nav-logout" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
