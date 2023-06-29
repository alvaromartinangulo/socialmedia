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
      </div>
  /*   <div className="Post">
      <div className="postReact">
        <div className="left">
          <h2>{data.price}</h2>
          <div>
            <h3>{data.title} </h3>
          </div>
        </div>
        <div className="right">
          <h4>{data.source}</h4>
        </div>
      </div>
    </div> */
  );
};

export default Post;