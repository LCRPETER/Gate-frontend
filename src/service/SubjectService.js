import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/subjects";

export const getAllSubjects = () => {
  return axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const updateSubject = (subjectId, subject) => {
  return axios.put(`${API_URL}/${subjectId}`, subject, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getSubjectById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const createSubject = (subject) => {
  return axios.post(API_URL, subject, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deleteSubjectById = (id) => {
  return axios.delete(`${API_URL}/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
