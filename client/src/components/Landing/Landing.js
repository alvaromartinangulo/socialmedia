import React from "react";
import "./Landing.css";
const Landing = () => {
    return (
        <div className = "container">
            <nav>
                <span class="leftallignnav">
                    <a><span className="logo">S</span></a>
                </span>
                <span class="rightallignnav">
                    <a><button className="button">Log In</button></a>
                    <a><button className="buttoninverted">Sign Up</button></a>
                </span>
            </nav>
            <div className="row">
                <div className="columnleft">
                </div>
                <div className="columnright">
                    <h1 style={{fontSize: 10 + 'rem'}}>STILLO</h1>
                    <h2>FIND<br/>
                    YOUR NEW<br/>
                    FAVORITE<br/></h2>
                </div>
            </div>
        </div>
    )
}

export default Landing;
