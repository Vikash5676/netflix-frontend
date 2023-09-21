import React, { useEffect, useState } from "react";
import "./SignUp.css";
import banner from "../../assets/netflix-banner.jpg";
import logo from "../../assets/Netflix-Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import verifyToken from "../../verifyToken";

const SignUp = () => {
  const navigate = useNavigate();

  const [inform, setInform] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    message1: "",
    message2: "",
  });
  const [showInput, setShowInput] = useState(false);
  const router = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showInput) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/adduser`, {
          method: "POST",
          body: JSON.stringify(inform),
        })
        .then((res) => {
          if (res.data.message) {
            router("/login");
            setShowInput(false);
            setValidate({ message1: "", message2: "" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/getuser`, {
          method: "POST",
          body: JSON.stringify(inform),
        })
        .then((res) => {
          if (res.data.message) {
            router("/login");
          } else {
            setValidate({
              message1: "This Email is not exist",
              message2: "",
            });
            setTimeout(() => {
              setShowInput(true);
            }, [500]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setInform({ ...inform, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      verifyToken(token).then((res) => {
        if (res.message) {
          navigate("/");
        }
      });
    }
  }, []);
  return (
    <main className="main">
      <section className="login-section">
        <div className="login-container">
          <header className="login-header">
            <div className="item logo">
              <img src={logo} alt="" />
            </div>
            <div className="item-buttons">
              <button
                onClick={() => {
                  router("/login");
                }}
              >
                Sign In
              </button>
            </div>
          </header>
        </div>
        <img src={banner} alt="" />
        <div className="fade-back"></div>
        <div className="container-text"></div>

        <div className="text-container col-flex">
          <div className="title">
            The biggest Indian hits. Ready to watch here from ₹ 149.
          </div>
          <div className="message1">Join today. Cancel anytime.</div>
          <div className="message2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="sign-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  autoComplete="email"
                  autoFill="true"
                  onChange={handleChange}
                />
                <p>{validate.message1}</p>
              </div>
              {showInput ? (
                <div>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    autoFill="false"
                    onChange={handleChange}
                    minLength={8}
                  />
                  <p>{validate.message2}</p>
                </div>
              ) : (
                ""
              )}
              <button type="submit">
                {showInput ? "Sign Up" : "Get Started"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
