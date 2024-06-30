import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/admin"; // Replace with your API URL

const getGroupScheduleById = (groupId, scheduleId) => {
  return axios.get(`${API_BASE_URL}/groups/${groupId}/schedules/${scheduleId}`);
};

export default {
  getGroupScheduleById,
};
