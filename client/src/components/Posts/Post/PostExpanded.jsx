import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./PostExpanded.css"
import { followBrand, unfollowBrand } from "../../../actions/UserActions";

const PostExpanded = ({  }) => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {data} = state;
    const { user } = useSelector((state) => state.authReducer.authData);
    const [followed, setFollowed] = useState(user.following.includes(data.store_ID));
    const handlefollow = (e) => {
        e.preventDefault();
        if (followed === true){
            dispatch(unfollowBrand(data.store_ID, user._id));
        }
        else{
            dispatch(followBrand(data.store_ID, user._id));
        }
        setFollowed((prev) => !prev)
      };
    return(
        <div className="PostExpanded">
            <div className="bodyCenter">
                <div className="productPost">
                    <img src={data.images[0]}></img>
                </div>
                <div className="brandPost">
                    <h3>{data.store_name}</h3>
                    <button className="button" onClick={handlefollow}>{followed? "Unfollow": "Follow"}</button>
                    <h4>{data.name}</h4>
                    <h3>{data.price}</h3>
                    <h4>{data.description.replace( /(<([^>]+)>)/ig, '')}</h4>
                    <a className="button" href={data.product_url} target="_blank" rel="noreferrer">{data.in_stock === true? "Purchase Now": "Out of Stock"}</a>
                </div>
            </div>
        </div>
    )
}

export default PostExpanded;