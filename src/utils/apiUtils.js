/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */

import axios from "axios";

// Need define API URL in constants or .env
const API_URL = process.env.REACT_APP_API_END_POINT;

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = API_URL;

axiosInstance.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json";
  return request;
}, null);

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export const _post = (url, payload) => {
  return axiosInstance.post(`/${url}`, payload).then((response) => {
    return response;
  });
};

// delete is a reserved name
export const _delete = (url) => {
  return axiosInstance.delete(`/${url}`).then((response) => {
    return response;
  });
};

export const _get = (url) => {
  return axiosInstance.get(`/${url}`).then((response) => {
    return response;
  });
};

export const _patch = (url, payload) => {
  return axiosClient.patch(`/${url}`, payload).then((response) => {
    return response;
  });
};
