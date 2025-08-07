import axiosInstance from "../api/axios";

export const registerUser = async (data) => {
  return axiosInstance.post('/users/register', data);
};

export const loginUser = async (data) => {
  return axiosInstance.post('/users/login', data);
};

export const currentUser = async () => {
  return axiosInstance.get('/users/profile');
};