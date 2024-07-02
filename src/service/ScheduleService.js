import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/admin"; // Replace with your API URL

const getGroupScheduleById = (groupId, scheduleId) => {
  return axios.get(
    `${API_BASE_URL}/groups/${groupId}/schedules/${scheduleId}`,
    {
      headers: { Authorization: localStorage.getItem("token") },
    }
  );
};

const getGroupSchedules = (groupId) => {
  return axios.get(`${API_BASE_URL}/group-schedules/${groupId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export default {
  getGroupScheduleById,
  getGroupSchedules,
};
