import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = (data) => api.post('/auth/login', data);
export const signupUser = (data) => api.post('/auth/signup', data);
export const fetchFriends = (token) =>
  api.get('/friends', { headers: { Authorization: `Bearer ${token}` } });
export const sendFriendRequest = (token, id) =>
  api.post(`/friends/request/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
export const getRecommendations = (token) =>
  api.get('/friends/recommendations', { headers: { Authorization: `Bearer ${token}` } });

export default api;
