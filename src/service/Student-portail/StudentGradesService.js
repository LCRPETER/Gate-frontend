import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

export const getStudentGrades = (studentMatricule) =>
  axios
    .get(`${API_URL}/${studentMatricule}/grades`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
