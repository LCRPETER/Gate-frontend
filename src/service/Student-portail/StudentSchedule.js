import axios from "axios";

const API_URL = "http://localhost:8080/api/student/";

export const getGroupSchedules = (groupId) =>
  axios.get(`${API_URL}//group-schedules/${groupId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const getGroupScheduleById = (groupId, scheduleId) =>
  axios.get(`${API_URL}/group/${groupId}/schedules/${scheduleId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
