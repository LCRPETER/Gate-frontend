import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const getAllSubjects = () => {
  return axios.get(`${API_URL}/subjects`);
};

const deleteSubjectById = (id) => {
  return axios.delete(`${API_URL}/subjects/delete/${id}`);
};

export default {
  getAllSubjects,
  deleteSubjectById,
};
