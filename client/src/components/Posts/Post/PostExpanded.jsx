import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./PostExpanded.css"
import { followBrand, unfollowBrand } from "../../../actions/UserActions";
import * as BrandApi from "../../../api/BrandRequests"
import ImageGallery from 'react-image-gallery';

const PostExpanded = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {data} = state;
    const { user } = useSelector((state) => state.authReducer.authData);
    const [followed, setFollowed] = useState(user.following.includes(data.store_ID));
    const [brand, setBrand] = useState(null)

    useEffect(()=> {
        const getBrandData = async () => {
          try
          {
            await BrandApi.getBrand(data.store_ID).then((result) => setBrand(result.data))
          }
          catch(error)
          {
            console.log(error)
          }
        }
        getBrandData();
      }, [data.store_ID, brand, setBrand])

    const handlefollow = (e) => {
        e.preventDefault();
        if (followed === true){
            dispatch(unfollowBrand(data.store_ID, user._id));
        }
        else{
            dispatch(followBrand(data.store_ID, user._id));
        }
        setFollowed((prev) => !prev)
      };
    return(
        <div className="PostExpanded">
            {brand === null ? "loading" : 
            <div className="bodyCenter">
                <div className="productPost">
                    <ImageGallery 
                    items={data.images.map((image) => {return({
                        original: image,
                    })})} 
                    showFullscreenButton={false}
                    showBullets= {true}
                    showGalleryFullscreenButton={false}
                    showPlayButton= {false}
                    showGalleryPlayButton= {false}
                    originalClass="img"
                    showThumbnails={true}
                    />
                </div>
                <div className="brandPost">
                    <div className="banner">
                        <img src={brand.banner}/>
                    </div>
                    <div className="brandLogo">
                        <img src={brand.profile_picture}/>
                    </div>
                    <div className="brandPostBody">
                    <h3>{data.store_name}</h3>
                    <button className="button" onClick={handlefollow}>{followed? "Unfollow": "Follow"}</button>
                    <h4>{data.name}</h4>
                    <h3>{data.price}</h3>
                    <h4>{data.description.replace( /(<([^>]+)>)/ig, '')}</h4>
                    <a className="button" href={data.product_url} target="_blank" rel="noreferrer">{data.in_stock === true? "Purchase Now": "Out of Stock"}</a>
                    </div>
                </div>
            </div>}
            
        </div>
    )
}

export default PostExpanded;