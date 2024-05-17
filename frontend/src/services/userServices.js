import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/user`;

const register = async (userInfo) => {
  const result = await request.post(`${baseUrl}/signup`, userInfo);

  return result;
};

export default register;
