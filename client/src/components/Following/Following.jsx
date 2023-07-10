import React, { useState } from "react";
import Posts from "../Posts/Posts"
import "./Following.css"
import Filter from "../Filter/Filter";
const Following = () =>{
    const [followingFilterParams, setFollowingFilterParams] = useState(new Set(["All Categories"]))

    const currentFilter = filterParams =>{
        const newFilterParams = new Set(filterParams)
        setFollowingFilterParams(newFilterParams)
        appliedFilter()
    }
    const appliedFilter = () =>{}
    return (
        <div className="Following">
            <Filter currentFilter={currentFilter}/>
            <Posts appliedFilter={followingFilterParams}/>
        </div>
    )
}
export default Following;