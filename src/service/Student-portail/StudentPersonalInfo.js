import axios from "axios";

const API_URL = "http://localhost:8080/api/student/";

export const getStudentById = (id) =>
  axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
