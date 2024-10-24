
import axios from "axios";

// Create a base Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com", // Base API URL
  timeout: 10000, // Request timeout
});

// Add a request interceptor to inject tokens or common headers
api.interceptors.request.use(
  (config) => {
    // Example: Adding Authorization header
    // const user = type window !== undefined && 
    // console.log(localStorage.getItem("user"), 'localStorage.getItem("user")')
    const user = typeof window !== "undefined" && localStorage.getItem('user')
    if (user) {
    const {token} = JSON.parse(user)
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error, 'error')
    return Promise.reject(error);
  }
);

// Add a response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle errors based on status code
      const { status } = error.response;
      if (status === 401) {
        // Handle unauthorized access (e.g., token expiration)
        console.error("Unauthorized, logging out...");
        // Perform logout or token refresh logic here
      } else if (status === 500) {
        console.error("Server error, try again later");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
