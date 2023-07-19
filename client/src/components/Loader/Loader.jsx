import React from "react";
import loaderimg from "../Images/Double_Ring-1s-361px_1.svg"
import "./Loader.css"
const Loader = () =>{
    return(
        <div className="Loader">
            <img src={loaderimg}/>
        </div>
    )
};

export default Loader;