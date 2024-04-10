// eslint-disable-next-line import/no-import-module-exports
import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/animals`;

// eslint-disable-next-line import/prefer-default-export
export const getAllAnimals = async () => {
  const result = request.get(baseUrl);

  return result;
};
