import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Ajusta la URL según tu backend

export const authService = {
  register: async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
  },

  login: async (email, password) => {
    return await axios.post(`${API_URL}/login`, { email, password });
  },

  updateProfile: async (userData) => {
    return await axios.put(`${API_URL}/profile`, userData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};

export default authService;