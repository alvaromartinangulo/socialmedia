import React from "react";
import Posts from "../Posts/Posts"
import "./Following.css"
import Filter from "../Filter/Filter";
const Following = () =>{
    return (
        <div className="Following">
            <Filter/>
            <Posts/>
        </div>
    )
}

export default Following;