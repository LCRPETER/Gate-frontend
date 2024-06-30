// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const createTeacher = () => {
  return axios.create(`${API_URL}/teachers`);
};

const getAllTeachers = () => {
  return axios.get(`${API_URL}/teachers`);
};

const getTeacherById = (id) => {
  return axios.get(`${API_URL}/teachers/${id}`);
};

const updateTeacher = () => {
  return axios.put(`${API_URL}/teachers`);
};

const searchTeachersByFirstNameOrLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/teachers/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });
};

const searchTeachersByFirstNameAndLastName = (firstName, lastName) => {
  return axios.get(`${API_URL}/teachers/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

const deleteTeacherById = (id) => {
  return axios.delete(`${API_URL}/teachers/delete/${id}`);
};

const deleteTeachersByFirstNameAndLastName = (firstName, lastName) => {
  return axios.delete(`${API_URL}/teachers/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
};

export default {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  searchTeachersByFirstNameOrLastName,
  searchTeachersByFirstNameAndLastName,
  deleteTeacherById,
  deleteTeachersByFirstNameAndLastName,
  updateTeacher,
};
