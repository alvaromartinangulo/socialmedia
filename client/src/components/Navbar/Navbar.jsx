import React, { useEffect } from "react";
import "./Navbar.css"
import profilepic from "../Images/Profile-PNG-File.png"
import { NavLink } from "react-router-dom";
import Vector from "../Images/Vector.svg"
import { useSelector } from "react-redux";
const Navbar = () =>{
    const { user } = useSelector((state) => state.authReducer.authData);
    useEffect(() =>{
        console.log(user)
    })
    return(
        <div className="Navbar">
            <nav className="nav-body">
                <ul className="nav-links">
                    <li><span className="logo">S</span></li>
                    <li><NavLink to="/foryou">
                    {({ isActive, isPending }) => (
                    <span className={isActive ? "active" : "inactive"}>For You</span>
                    )}</NavLink></li>
                    <li><NavLink to="/following">
                    {({ isActive, isPending }) => (
                    <span className={isActive ? "active" : "inactive"}>Following</span>
                    )}</NavLink></li>
                    <div className="searchBar"><input
                    type="text"
                    placeholder=""
                    />
                    <img src={Vector}/>
                    </div>
                    <img className = "profilepic" src={user.profile_picture? user.profile_picture : profilepic}></img>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;