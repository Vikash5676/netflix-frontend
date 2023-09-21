import React, { useEffect, useState } from "react";
import logo from "../../assets/Netflix-Logo.png";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import verifyToken from "../../verifyToken";

const SignIn = ({ setToken }) => {
  const navigate = useNavigate();
  const [inform, setInform] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setInform({ ...inform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/getuser`, {
        method: "POST",
        body: JSON.stringify(inform),
      })
      .then((res) => {
        if (res.data.message === true && res.data.token !== null) {
          sessionStorage.setItem("token", res.data.token);
          navigate("/");
        } else if (res.data.message === true && res.data.token === null) {
          setMessage("Password is Incorrect");
        } else if (res.data.message === false) {
          setMessage("This email is not register");
          navigate("/signup");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    verifyToken(token).then((res) => {
      if (res.message) {
        navigate("/");
      }
    });
  }, []);
  return (
    <main>
      <section className="signin-section ">
        <div className="login-section1 col-flex">
          <header className="signin-header">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
          </header>
          <div className="login-form">
            <div className="title-form">Sign In</div>
            <form onSubmit={handleSubmit}>
              <div className="form-inputs">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  onChange={handleChange}
                />
                <p style={{ color: "red", fontSize: "0.7rem" }}>{message}</p>
              </div>
              <button type="submit">Sign In</button>
              <div></div>
            </form>
            <div className="login-message1">
              New to Netflix? <Link to={"/signup"}>Sign up now</Link>.
            </div>
            <div className="login-message2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more</span>.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
