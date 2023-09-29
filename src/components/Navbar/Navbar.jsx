import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Netflix-Logo.png";
import { Search } from "semantic-ui-react";
import { AiOutlinePoweroff } from "react-icons/ai";
import axios from "axios";

const Navbar = ({ scroll, setSearched }) => {
  const [values, setValues] = useState("");
  const [results, setResults] = useState([]);
  const option = [];
  const handleClick = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  const handleSearchChange = (e, value) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
      },
    };
    setValues(value.value);
    if (value.value.length > 0) {
      axios
        .get(
          `${process.env.REACT_APP_MOVIE_BASE_URL}/3/search/multi?query=${value.value}&include_adult=false&language=en-US&page=1`,
          options
        )
        .then((res) => {
          res?.data?.results?.map((ele) => {
            if (ele.original_name) {
              option.push({
                title: ele.original_name,
                id: ele.id,
                key: ele.id,
              });
            }
          });
          setResults(option);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          <Search
            loading={false}
            placeholder="Search..."
            onSearchChange={handleSearchChange}
            results={results}
            value={values}
          />

          <AiOutlinePoweroff className="nav-logout" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
