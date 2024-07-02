import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/teachers";

export const createTeacher = (teacher) => {
  return axios.post(API_URL, teacher, {
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

const getAllTeachers = () => {
  return axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const getTeacherById = (id) => {
  return axios.get(API_URL, id, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const updateTeacher = (updatedTeacher) => {
  return axios.put(`${API_URL}/${updatedTeacher.user_id}`, updatedTeacher, {
    headers: { Authorization: localStorage.getItem("token") },
  });
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
  return axios.delete(`${API_URL}/teachers/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
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
