import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/teacher";

export const getTeacherSchedules = (teacherId) => {
  return axios.get(`${API_BASE_URL}/teacher/${teacherId}/schedules`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
