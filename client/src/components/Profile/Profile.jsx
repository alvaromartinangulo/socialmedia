import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css"
import * as BrandApi from "../../api/BrandRequests"
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader"
const Profile = () =>{
    const { user } = useSelector((state) => state.authReducer.authData);
    const [followingBrands, setFollowingBrands] = useState([...user.following]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
      const getBrandData = async _ => {
        const currBrands = []
        try{
          for(let i = 0; i < followingBrands.length; i++){
            await BrandApi.getBrand(followingBrands[i]).then((result) => {
              currBrands.push(result.data)
            }
          )
        }
        }
        catch(error){
          console.log(error);
        }
        finally{
          setBrands(currBrands);
        }
    };
    getBrandData()
      }, [])

    const handleGetBrand = (brand) =>{
      navigate(`../brands/${brand._id}`)
      }
    return(
        <div className="Profile">
            <div className="card">
                <div className="banner">
                    <img src={user.banner}></img>
                    <div className="cardLogo">
                    <img src={user.profile_picture}/>
                    </div>
                </div>
                <div className="bottomCard">
                    <h2>{user.username.toUpperCase()}</h2>
                </div>
            </div>
            <div className="followingBrands">
              <h3>Following Stores</h3>
              <div className="brandSlider">
                {brands.length !== followingBrands.length ? <Loader/>:
                brands.map((brand, id) =>{
                    return(
                      <div className="brandCard" key={id} onClick={() => handleGetBrand(brand)} style={{cursor:"pointer"}}>
                        <div className="brandCardImg">
                         <img src={brand.banner} />
                         </div>
                         <h4>{brand.name}</h4>
                         </div>
                         )
                })
                }
                </div>
            </div>
            <div className="boards">
              <h3>
                Boards
              </h3>
            </div>
        </div>
    )
}

export default Profile