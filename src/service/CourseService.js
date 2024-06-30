import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const getAllCourses = () => {
  return axiosInstance.get("/courses");
};

const deleteCoursesById = (id) => {
  console.log("Deleting Group ID: ", id);
  return axiosInstance.delete(`/courses/delete/${id}`);
};

const createCourse = async (courseData) => {
  const response = await axiosInstance.post("/", courseData);
  return response.data;
};

export default {
  getAllCourses,
  deleteCoursesById,
  createCourse,
};
