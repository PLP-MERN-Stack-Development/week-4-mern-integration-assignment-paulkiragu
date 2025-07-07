import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// Add token to requests (if logged in)
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Posts API
export const getPosts = async () => (await API.get('/posts')).data;
export const getPostById = async (id) => (await API.get(`/posts/${id}`)).data;
export const createPost = async (post) => (await API.post('/posts', post)).data;
export const updatePost = async (id, post) => (await API.put(`/posts/${id}`, post)).data;
export const deletePost = async (id) => (await API.delete(`/posts/${id}`)).data;

// Categories API
export const getCategories = async () => (await API.get('/categories')).data;
export const createCategory = async (category) => (await API.post('/categories', category)).data;
