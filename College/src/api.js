import axios from 'axios';

// Set your API base URL here
const API = axios.create({
  baseURL: 'https://your-api-url.com/api', // Change this to your backend URL
});

// Example: Add a request interceptor (optional)
// API.interceptors.request.use((config) => {
//   // Add auth token or headers here if needed
//   return config;
// });

export default API;
