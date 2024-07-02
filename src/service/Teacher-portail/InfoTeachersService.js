import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/teacher";

export const getTeacherById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const searchTeacherByFirstNameAndLastName = (firstName, lastName) => {
  return axios.get(`${API_BASE_URL}/searchByFirstNameAndLastName`, {
    headers: { Authorization: localStorage.getItem("token") },
    params: {
      firstName: firstName,
      lastName: lastName,
    },
  });
};
