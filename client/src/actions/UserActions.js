import * as UserApi from "../api/UserRequests";

export const followBrand = (id, data)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_BRAND", data: id})
    UserApi.followBrand(id, data)
}

export const unfollowBrand = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_BRAND", data: id})
    UserApi.unfollowBrand(id, data)
}