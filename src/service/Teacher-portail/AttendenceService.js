import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/teacher";

export const recordAttendance = (courseAttendance) => {
  return axios.post(`${API_URL}/attendance`, courseAttendance, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getAttendanceByCourse = (courseId) => {
  return axios.get(`${API_BASE_URL}/attendance/course/${courseId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getAttendanceByStudent = (studentId) => {
  return axios.get(`${API_BASE_URL}/attendance/student/${studentId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const updateAttendance = (courseAttendance) => {
  return axios.put(`${API_BASE_URL}/attendance`, courseAttendance, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deleteAbsentById = (id) => {
  return axios.delete(`${API_BASE_URL}/attendance/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
