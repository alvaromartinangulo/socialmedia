import React from "react";
import "./Navbar.css"
import profilepic from "../Images/Profile-PNG-File.png"
import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return(
        <div className="Navbar">
            <nav className="nav-body">
                <ul className="nav-links">
                    <span className="left-nav">
                    <li><span className="logo">S</span></li>
                    <li><NavLink to="/foryou">
                    {({ isActive, isPending }) => (
                    <span className={isActive ? "active" : "inactive"}>For You</span>
                    )}</NavLink></li>
                    <li><NavLink to="/following">
                    {({ isActive, isPending }) => (
                    <span className={isActive ? "active" : "inactive"}>Following</span>
                    )}</NavLink></li>
                    <li><NavLink to="/saved">
                    {({ isActive, isPending }) => (
                    <span className={isActive ? "active" : "inactive"}>Saved</span>
                    )}</NavLink></li>
                    </span>
                    <span className="right-nav"><img className = "profilepic" src={profilepic}></img></span>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;