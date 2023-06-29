import React from "react";
import "./Navbar.css"
import profilepic from "../Images/Profile-PNG-File.png"
const Navbar = () =>{
    return(
        <div className="Navbar">
            <nav className="nav-body">
                <ul className="nav-links">
                    <span className="left-nav">
                    <span className="logo">S</span>
                    <li><a className="nav">For You</a></li>
                    <li><a className="nav">Following</a></li>
                    <li><a className="nav">Saved</a></li>
                    </span>
                    <span className="right-nav"><img className = "profilepic" src={profilepic}></img></span>
                </ul>
                
                <div className="search">
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;