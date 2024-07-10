import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

export const getAttendanceByStudentMatricule = (studentMatricule) =>
  axios.get(`${API_URL}/${studentMatricule}/attendance`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
