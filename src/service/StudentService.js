import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/students";

export const createStudent = (student) =>
  axios.post(API_URL, student, {
    headers: { Authorization: localStorage.getItem("token") },
  });

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

export const getAllStudents = () =>
  axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const getStudentById = (id) =>
  axios.get(`${API_URL}/students/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const updateStudent = (student) => {
  return axios.put(API_URL, student, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const searchStudentsByFirstNameOrLastName = (firstName, lastName) =>
  axios.get(`${API_URL}/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });

export const searchStudentsByFirstNameAndLastName = (firstName, lastName) =>
  axios.get(`${API_URL}/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });

export const deleteStudentById = (id) =>
  axios.delete(`${API_URL}/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const deleteStudentsByFirstNameAndLastName = (firstName, lastName) =>
  axios.delete(`${API_URL}/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
