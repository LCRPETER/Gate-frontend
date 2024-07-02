import axios from "axios";

const API_URL = "http://localhost:8080/api/student/";

export const getStudentGrades = (studentId) =>
  axios.get(`${API_URL}/${studentId}/grades`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
