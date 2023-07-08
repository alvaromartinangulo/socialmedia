import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BrandApi from "../../api/BrandRequests"
import BrandPosts from "../Posts/BrandPosts/BrandPosts";
import "./Brand.css"
const Brand = () =>{
    const {id} = useParams();
    const [brand, setBrand] = useState(null);
    useEffect(()=> {
        const getBrandData = async () => {
          try
          {
            await BrandApi.getBrand(id).then((result) => setBrand(result.data))
          }
          catch(error)
          {
            console.log(error)
          }
        }
        getBrandData();
      }, [id, brand, setBrand])
    return(
      <div className="Brand">
        {brand === null? "Loading":
        <div className="BrandCard">
        <div className="banner">
            <img src={brand.banner}></img>
        </div>
        <div className="bottomCard">
            <h2>{brand.name}</h2>
        </div>
      </div>}
        
        <BrandPosts id={id}/>
      </div>
    )
}

export default Brand