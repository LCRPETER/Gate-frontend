import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/teacher/grades";

export const getAllGrades = () => {
  return axios.get(`${API_BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getStudentGrades = (studentId) => {
  return axios.get(`${API_BASE_URL}/student/${studentId}/grades`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getSubjectGrades = (subjectId) => {
  return axios.get(`${API_BASE_URL}/subject/${subjectId}/grades`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const createGrade = (grade) => {
  return axios.post(`${API_BASE_URL}`, grade, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updateGrade = (noteId, updatedGrade) => {
  return axios.put(`${API_BASE_URL}/${noteId}`, updatedGrade, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteGrade = (id) => {
  return axios.delete(`${API_BASE_URL}/grades/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
