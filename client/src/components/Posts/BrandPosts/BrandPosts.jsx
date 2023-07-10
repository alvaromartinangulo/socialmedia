import React, { useEffect } from "react";
import Post from "../Post/Post";
import * as BrandApi from "../../../api/BrandRequests"
import { useState } from "react";
import "./BrandPosts.css"
import { categoriesMap } from "../../Filter/Filter";
const BrandPosts = ({appliedFilter, id}) => {
  const [posts, setPosts] = useState(null)
  useEffect(()=> {
    const getBrandPosts = async () => {
      try
      {
        await BrandApi.getBrandPosts(id).then((result) => setPosts(result.data))
      }
      catch(error)
      {
        console.log(error)
      }
    }
    getBrandPosts();
  }, [id, posts, setPosts])
  return (
    <div className="BrandPosts">
      {posts === null? "loading":
        posts.map((post, id) => {
            if(appliedFilter.has("All Categories") || appliedFilter.has(categoriesMap.get(post.product_type.toLowerCase()))){
              return <Post data={post} key={id} />;
            } 
          })}
    </div>
  );
};

export default BrandPosts;