import * as UserApi from "../api/UserRequests";

export const followBrand = (id, userId)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_BRAND", data: id})
    UserApi.followBrand(id, userId)
}

export const unfollowBrand = (id, userId)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_BRAND", data: id})
    UserApi.unfollowBrand(id, userId)
}