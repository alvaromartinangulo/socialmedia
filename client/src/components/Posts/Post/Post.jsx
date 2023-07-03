import React, { useState } from "react";
import "./Post.css";
import { likePost } from "../../../api/PostRequests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data['Likes'].includes(user._id));
  const navigate = useNavigate()
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
  };
  const handleGetPost = () =>{
    navigate(`../posts/${data._id}`, {state: {data: data}})
  }
  return (
  <div className="Post"
  onClick={handleGetPost}>
    <img
        src={data['Image URL']}
        alt="NOPE"
      />
    <div className="overlay">
    <div className="left">
      <div>
          <h3>{data['Name']} </h3>
      </div>
      <h2>{"$" + data['Price'] + ".00"}</h2>
    </div>
    <div className="right">
      <h4>{data['Display Name']}</h4>
      <a className="button" href={data['URL']} target="_blank" rel="noreferrer">Shop</a>
      <span className="logo"
          style={{backgroundColor: liked ?  "var(--palette-red)": "var(--palette-yellow)",
        cursor: "pointer"}}
          onClick={handleLike}
        >S</span>
    </div>

    </div>

    
  </div>
    
  );
};

export default Post;