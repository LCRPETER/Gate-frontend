import axios from "axios";

const API_URL = "http://localhost:8080/api/student/";

export const getAttendanceByStudent = (studentId) =>
  axios.get(`${API_URL}/attendance/student/${studentId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
