const request = async (method, url) => {
  const response = await fetch(url, { method });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const get = request.bind(null, "GET");
