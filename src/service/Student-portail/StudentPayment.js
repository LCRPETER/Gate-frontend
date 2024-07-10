import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

export const getPaymentByStudentMatricule = (studentMatricule) =>
  axios.get(`${API_URL}/${studentMatricule}/payment`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
