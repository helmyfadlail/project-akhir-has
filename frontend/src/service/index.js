import axios from "axios";

const BASE_URL = "/api/users";

export const getAllUsers = async () => {
  return await axios.get(`${BASE_URL}`);
};

export const getUserById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

export const addUser = async (body) => {
  return await axios.post(`${BASE_URL}`, body);
};

export const updateUser = async (id, body) => {
  return await axios.put(`${BASE_URL}/${id}`, body);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};
