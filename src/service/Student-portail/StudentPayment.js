import axios from "axios";

const API_URL = "http://localhost:8080/api/student/";

export const getPaymentById = (studentId) =>
  axios.get(`${API_URL}/payments/student/${studentId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
