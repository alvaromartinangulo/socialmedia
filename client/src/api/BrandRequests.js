import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getBrand = (id) => API.get(`/brands/${id}`)
export const getBrandPosts = (id) => API.get(`/brands/${id}/posts`)