import React, { useState } from "react";
import "./Post.css";
import { likePost } from "../../../api/PostRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  /* const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)
 */
  
  console.log(data);
/*   const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  }; */
  return (
    <div className="Post">
      <img
        src={data.thumbnail}
        alt="NOPE"
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
        <div className="left">
          <span><b>{data.price}</b></span>
          <div>
            <b>{data.title} </b>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Post;