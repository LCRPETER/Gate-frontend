import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/students";

export const createStudent = (student) => axios.post(API_URL, student);

export const uploadPhoto = (id, file) => {
  let formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API_URL}/uploadPhoto/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllStudents = () => axios.get(API_URL);

export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);

export const updateStudent = () => axios.put(API_URL);

export const searchStudentsByFirstNameOrLastName = (firstName, lastName) =>
  axios.get(`${API_URL}/searchByFirstNameOrLastName`, {
    params: { firstName, lastName },
  });

export const searchStudentsByFirstNameAndLastName = (firstName, lastName) =>
  axios.get(`${API_URL}/searchByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });

export const deleteStudentById = (id) =>
  axios.delete(`${API_URL}/delete/${id}`);

export const deleteStudentsByFirstNameAndLastName = (firstName, lastName) =>
  axios.delete(`${API_URL}/deleteByFirstNameAndLastName`, {
    params: { firstName, lastName },
  });
