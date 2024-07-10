import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/teacher";

export const getGroupsByTeacher = (matricule) => {
  return axios.get(`${API_BASE_URL}/${matricule}/groups`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getStudentsByGroupId = (teacherId) => {
  return axios.get(`${API_BASE_URL}/${teacherId}/student`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
