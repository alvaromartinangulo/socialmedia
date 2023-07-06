import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const getAllUsers = ()=> API.get('/user')
export const followBrand = (id,userId)=> API.put(`/user/${id}/follow`, {userId: userId})
export const unfollowBrand = (id, userId)=> API.put(`/user/${id}/unfollow`, {userId: userId})