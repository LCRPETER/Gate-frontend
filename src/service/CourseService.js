import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/courses";

const getAllCourses = () => {
  return axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const createCourse = (course) => {
  return axios.post(API_URL, course, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const deleteCoursesById = (id) => {
  console.log("Deleting Group ID: ", id);
  return axios.delete(`${API_URL}/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export default {
  getAllCourses,
  deleteCoursesById,
  createCourse,
};
