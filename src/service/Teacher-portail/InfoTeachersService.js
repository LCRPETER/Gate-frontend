import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/teacher";

export const getTeacherById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
