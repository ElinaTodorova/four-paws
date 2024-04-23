import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}`;

export const getAll = async () => {
  const result = await request.get(`${baseUrl}/api/categories`);

  return result;
};

export const create = async (data) => {
  await request.post(baseUrl, data);
};
