import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}`;

export const getAllDogs = async () => {
  const result = await request.get(`${baseUrl}/api/categoriesDog`);

  return result;
};

export const getAllCats = async () => {
  const result = await request.get(`${baseUrl}/api/categoriesCat`);

  return result;
};

export const create = async (data) => {
  await request.post(baseUrl, data);
};
