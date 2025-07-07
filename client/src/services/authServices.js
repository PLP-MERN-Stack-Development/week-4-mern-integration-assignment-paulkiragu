import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
});

// Auth API
export const login = async (credentials) => (await API.post('/login', credentials)).data;
export const register = async (credentials) => (await API.post('/register', credentials)).data;
