import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const getAllCourses = () => {
  return axios.get(`${API_URL}/courses`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const deleteCoursesById = (id) => {
  console.log("Deleting Group ID: ", id);
  return axios.delete(`${API_URL}/courses/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

export default {
  getAllCourses,
  deleteCoursesById,
  createCourse,
};
