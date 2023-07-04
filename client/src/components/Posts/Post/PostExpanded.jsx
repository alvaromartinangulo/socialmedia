import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostExpanded.css"
import { followBrand, unfollowBrand } from "../../../actions/UserActions";

const PostExpanded = ({  }) => {
    const {state} = useLocation();
    const {data} = state;
    const { user } = useSelector((state) => state.authReducer.authData);
    const [followed, setFollowed] = useState(user.following.includes(data._id));
    const handlefollow = () => {
      };
    return(
        <div className="PostExpanded">
            <div className="bodyCenter">
                <div className="productPost">
                    <img src={data.images[0]}></img>
                </div>
                <div className="brandPost">
                    <h4>{data.store_name}</h4>
                    <h4>{data.name}</h4>
                    <h3>{data.price}</h3>
                    <h3>{data.in_stock === "Yes"? "In stock": "Out of Stock"}</h3>
                    <a className="button" href={data.product_url} target="_blank" rel="noreferrer">Purchase Now</a>
                </div>
            </div>
        </div>
    )
}

export default PostExpanded;