import { Spinner } from "components/Elements/Spinner";
import storage from "utils/storage";
import {
  AuthUser,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  UserResponse,
  loginAPI,
  registerAPI,
} from "features/auth";

import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleError } from "utils/ErrorHandler";

const api = "http://localhost:5015/api";

interface AuthContextType {
  user: string | null;
  login: (credentials: LoginCredentialsDTO) => Promise<void>;
  register: (credentials: RegisterCredentialsDTO) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const navigate = useNavigate();

  const loginAPI = async (loginData: LoginCredentialsDTO) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${api}/account/login`,
        loginData
      );
      return response.data.token;
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  const registerAPI = async (registerData: RegisterCredentialsDTO) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${api}/account/register`,
        registerData
      );
      return response.data.token;
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  const login = async (loginData: LoginCredentialsDTO) => {
    try {
      const token = await loginAPI(loginData);
      localStorage.setItem("token", token);
      const decodedUser = JSON.parse(atob(token.split(".")[1]));
      localStorage.setItem("user", decodedUser.username);
      setUser(decodedUser.username);
      navigate("/protected");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (registerData: RegisterCredentialsDTO) => {
    try {
      const token = await registerAPI(registerData);
      localStorage.setItem("token", token);
      const decodedUser = JSON.parse(atob(token.split(".")[1]));
      localStorage.setItem("user", decodedUser.username);
      setUser(decodedUser.username);
      navigate("/protected");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
