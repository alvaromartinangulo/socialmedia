import React, { useEffect } from "react";
import { getLikedPosts } from "../../actions/PostActions";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./LikedPosts.css";
import { useParams } from "react-router-dom";

const LikedPosts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getLikedPosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
/*   if(params.id) posts = posts.filter((post)=> post.userId===params.id) */
  return (
    <div className="LikedPosts">
      {loading
        ? "Loading"
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default LikedPosts;