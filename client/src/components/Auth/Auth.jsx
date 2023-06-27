import React, { useState } from "react";
import "./Auth.css";
import { logIn, signUp, logInGoogle } from "../../actions/authActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';


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

  //Login google
  const googleLogin = (response) => {
    dispatch(logInGoogle(response, navigate))
  };

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
    <div className="Auth">
      <div className="wrapper">
        <div>
          <span className="logo">S</span>
          <h3>Welcome to</h3> 
            <h3>STILLO.</h3>
        </div>
        <div className="spacer"></div>
        <div>
        <GoogleLogin
            onSuccess={credentialResponse => {
              googleLogin(credentialResponse);
            }}
            theme="filled_black"
            text="continue_with"
            shape="circle"
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
          </div>

          <div className="spacer"></div>
          <h4>OR</h4>
          <div className="spacer"></div>
        <form onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>
          
          <div style={{display: isSignUp ? "" : "none"}}>
          {isSignUp && (<input
              
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
              
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div style={{display: isSignUp ? "" : "none"}}>
            {isSignUp && (
              <input
                
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
          <div className="isSignUp">
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
          </div>
          <div>
            <button
              className="button authButton"
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