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
                    <img src={data['Image URL']}></img>
                </div>
                <div className="brandPost">
                    <h4>{data['Display Name']}</h4>
                    <h4>{data['Name']}</h4>
                    <h3>{data['Price']}</h3>
                    <h3>{data['In Stock'] === "Yes"? "In stock": "Out of Stock"}</h3>
                    <a className="button" href={data['URL']} target="_blank" rel="noreferrer">Purchase Now</a>
                </div>
            </div>
        </div>
    )
}

export default PostExpanded;