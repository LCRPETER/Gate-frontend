// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/parents";

export const postParents = (parent) => {
  return axios.post(API_URL, parent, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const uploadPhoto = (id, file) => {
  let formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API_URL}/uploadPhoto/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const addStudentToParent = () => {
  return axios.post(`${API_URL}/${parentId}/students/${studentId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getAllParents = () => {
  return axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getParentById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const updateParent = (id) => {
  return axios.put(`${API_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const searchParentsByFirstNameAndLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

export const searchParentsByFirstNameOrLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });
};

export const getStudentsByParentId = (parentId) => {
  return axios.get(`${API_URL}/${parentId}/students`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deleteParentById = (id) => {
  return axios.delete(`${API_URL}/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deleteParentsByFirstNameAndLastName = (firstName, lastName) => {
  return axios.delete(`${API_URL}/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};
