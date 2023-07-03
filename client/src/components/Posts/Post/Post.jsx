import React, { useState } from "react";
import "./Post.css";
import { likePost } from "../../../api/PostRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data['Likes'].includes(user._id));

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
  };
  return (
  <div className="Post">
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