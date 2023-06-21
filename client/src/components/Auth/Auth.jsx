import React, { useState } from "react";
import "./Auth.css";
import { logIn, signUp } from "../../actions/authActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const initialState = {
    username: "",
    email:"",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(location.state?.signUp ? true : false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <>
    <nav><a><span className="logo">S</span></a>
    </nav>
    <div className="Auth">
      {/* left side */}
      
      <div className="a-left">

        <div>
          <h1>STILLO.</h1>
          <h3>Shopping made easy</h3>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h2>{isSignUp ? "Sign Up" : "Log in"}</h2>
          <div style={{display: isSignUp ? "flex" : "none"}}>
          {isSignUp && (<input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />)}
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="Email"
              className="infoInput"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div style={{display: isSignUp ? "flex" : "none"}}>
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            {isSignUp
                ? "Already have an account? "
                : "Don't have an account? " }
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Auth;