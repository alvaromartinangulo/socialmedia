import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostActions";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { categoriesMap } from "../Filter/Filter";
import Loader from "../Loader/Loader"

const Posts = ({appliedFilter}) => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
/*   if(params.id) posts = posts.filter((post)=> post.userId===params.id) */
  return (
    <div className="Posts">
      {/* loading
        ? */ <Loader/>
        /* : posts.map((post, id) => {
          if(appliedFilter.has("All Categories") || appliedFilter.has(categoriesMap.get(post.product_type.toLowerCase()))){
            return <Post data={post} key={id} />;
        } 
          }) */}
    </div>
  );
};

export default Posts;