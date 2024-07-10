import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

export const getStudentByMatricule = (studentMatricule) =>
  axios.get(`${API_URL}/${studentMatricule}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
