// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const postParents = () => {
  return axios.post(`${API_URL}/parents`);
};

const addStudentToParent = () => {
  return axios.post(`${API_URL}/parents/${parentId}/students/${studentId}`);
};

const getAllParents = () => {
  return axios.get(`${API_URL}/parents`);
};

const getParentById = (id) => {
  return axios.get(`${API_URL}/parents/${id}`);
};

const updateParent = (id) => {
  return axios.put(`${API_URL}/parents/${id}`);
};

const searchParentsByFirstNameAndLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/parents/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

const searchParentsByFirstNameOrLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/parents/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });
};

const getStudentsByParentId = (parentId) => {
  return axios.get(`${API_URL}/parents/${parentId}/students`);
};

const deleteParentById = (id) => {
  return axios.delete(`${API_URL}/parents/delete/${id}`);
};

const deleteParentsByFirstNameAndLastName = (firstName, lastName) => {
  return axios.delete(`${API_URL}/parents/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

export default {
  postParents,
  addStudentToParent,
  getAllParents,
  getParentById,
  updateParent,
  searchParentsByFirstNameAndLastName,
  searchParentsByFirstNameOrLastName,
  getStudentsByParentId,
  deleteParentById,
  deleteParentsByFirstNameAndLastName,
};
