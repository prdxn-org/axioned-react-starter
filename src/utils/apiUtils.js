import axios from "axios";

// Need define API URL in constants or .env
const API_URL = process.env.REACT_APP_API_END_POINT;

let axiosInstance = axios.create({
  baseURL: API_URL,
});

const configAxios = () => {
  axiosInstance = axios.create({
    baseURL: API_URL,
  });
};

const getHeaders = () => {
  // const token = 'Token get from Store'
  return {
    // Authorization: token && `Token ${token}`,
    "Content-Type": "application/json",
  };
};

export const _post = (url, data, headers = getHeaders()) => {
  configAxios();
  return axiosInstance({
    method: "POST",
    url,
    data,
    headers: { ...headers, ...getHeaders() },
  });
};

// delete is a reserved name
export const _delete = (url) => {
  configAxios();
  return axiosInstance({
    method: "DELETE",
    url,
    headers: getHeaders(),
  });
};

export const _get = (url) => {
  updateAxios();
  const { data } = await axiosInstance({
    method: "GET",
    url,
    headers: getHeaders(),
  });
  return data;
};

export const _patch = (url, data) => {
  configAxios();
  return axiosInstance({
    method: "PATCH",
    url,
    data,
    headers: getHeaders(),
  });
};
