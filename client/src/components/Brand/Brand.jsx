import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as BrandApi from "../../api/BrandRequests"
import BrandPosts from "../Posts/BrandPosts/BrandPosts";
import "./Brand.css"
import { useDispatch, useSelector } from "react-redux";
import { followBrand, unfollowBrand } from "../../actions/UserActions";
const Brand = () =>{
    const {id} = useParams();
    const [brand, setBrand] = useState(null);
    const {state} = useLocation();
    const { user } = useSelector((state) => state.authReducer.authData);
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);

    useEffect(()=> {
        const getBrandData = async () => {
          try
          {
            await BrandApi.getBrand(id).then((result) => {
              setBrand(result.data)
              setFollowed(user.following.includes(brand._id))
            }
            )
          }
          catch(error)
          {
            console.log(error)
          }
        }
        getBrandData();
      }, [id, brand, user, setBrand, setFollowed])

    const handlefollow = () => {
      if (followed === true){
          dispatch(unfollowBrand(brand._id, user._id));
          console.log("unfollowed")
      }
      else{
          dispatch(followBrand(brand._id, user._id));
          console.log("followed")
      }
      setFollowed((prev) => !prev)
    };
    return(
      <div className="Brand">
        {brand === null? "Loading":
        <div className="BrandCard">
        <div className="banner">
            <img src={brand.banner}></img>
            <div className="brandLogo">
              <img src={brand.profile_picture}/>
            </div>
        </div>
        <div className="bottomCard">
            <h2>{brand.name.toUpperCase()}</h2>
            <button className={followed?"button buttonUnfollow": "button buttonFollow"}
                    onClick={handlefollow}>{followed? "Following": "Follow"}</button>
        </div>
      </div>}
        
        <BrandPosts id={id}/>
      </div>
    )
}

export default Brand