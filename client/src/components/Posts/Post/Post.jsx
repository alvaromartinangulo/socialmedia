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
      <h4>{data['Brand']}</h4>
      <a className="button" href={data['URL']} target="_blank" rel="noreferrer">Shop</a>
    </div>

    </div>

    
  </div>
    
  );
};

export default Post;