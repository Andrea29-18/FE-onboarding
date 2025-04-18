import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const payload = { email, password };
      console.log("🚀 Enviando a backend:", payload);
  
      const response = await axios.post("http://localhost:8080/api/auth/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Login exitoso", response.data);
    } catch (error) {
      console.error(" Error al hacer login:", error.response?.data || error.message);
      throw error;
    }
  };
  

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      navigate("/login");
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await authService.updateProfile(userData);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response;
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, updateProfile, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export const useAuth = () => useContext(AuthContext);