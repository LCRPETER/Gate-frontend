// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const getAllUsers = () => {
  return axios.get(`${API_URL}/users`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const getUserById = (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

const getUsersByRole = (role) => {
  return axios.get(`${API_URL}/users/role/${role}`);
};

const searchUsersByFirstNameOrLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/users/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });
};

const searchUsersByFirstNameAndLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/users/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

const deleteUserById = (id) => {
  return axios.delete(`${API_URL}/users/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const deleteUsersByFirstNameAndLastName = (firstName, lastName) => {
  return axios.delete(`${API_URL}/users/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

export default {
  getAllUsers,
  getUserById,
  getUsersByRole,
  searchUsersByFirstNameOrLastName,
  searchUsersByFirstNameAndLastName,
  deleteUserById,
  deleteUsersByFirstNameAndLastName,
};
