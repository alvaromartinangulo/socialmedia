import React, { useState } from "react";
import "./Post.css";
import { likePost } from "../../../api/PostRequests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const navigate = useNavigate();
  function handleLike(event){
    event.stopPropagation();
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
  };
  function handleShop(event){
    event.stopPropagation();
  }
  const handleGetPost = () =>{
    navigate(`../posts/${data._id}`, {state: {data: data}})
  }
  return ( data.images[0] ?
  <div className="Post"
  onClick={handleGetPost}>
    <img
        src={data['images'][0]}
        alt="No image"
      />
    <div className="overlay">
    <div className="left">
      <div>
          <h3>{data['name']} </h3>
      </div>
      <h2>{data.price}</h2>
    </div>
    <div className="right">
      <h4>{data.store_name}</h4>
      <a className="button" href={data.product_url} target="_blank" rel="noreferrer" onClick={handleShop}>Shop</a>
      <span className="logo"
          style={{backgroundColor: liked ?  "var(--palette-red)": "var(--palette-yellow)",
        cursor: "pointer"}}
          onClick={handleLike}
        >S</span>
    </div>

    </div>

    
  </div>
    
  : "");
};

export default Post;