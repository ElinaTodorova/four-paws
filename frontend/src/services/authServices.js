import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api`;

export const register = async (userInfo) => {
  const result = await request.post(`${baseUrl}/signup`, userInfo);

  return result;
};

export const login = async (userData) => {
  const result = await request.post(`${baseUrl}/login`, userData);

  return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);
