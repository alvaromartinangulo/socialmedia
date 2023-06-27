import React, { useState } from "react";
import "./Post.css";
import { likePost } from "../../../api/PostRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
 /*  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  }; */
  return (
    <div className="Post">
      <img
        src={data.thumbnail ? data.thumbnail : "NO PIC"}
        alt=""
      />

      <div className="postReact">
        {/* <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" /> */}
      </div>
      <div className="detail">
        <span>
          <b>{data.title} </b>
        </span>
        <span>{data.price}</span>
        <span>{data.product_link}</span>
      </div>
    </div>
  );
};

export default Post;