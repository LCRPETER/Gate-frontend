import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/admin";

export const getAllSchedulesSortedByDate = () => {
  return axios.get(`${API_BASE_URL}/schedules`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getGroupSchedules = (groupId) => {
  return axios.get(`${API_BASE_URL}/group-schedules/${groupId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getGroupScheduleByDate = (groupId, startDate, endDate) => {
  return axios.get(`${API_BASE_URL}/${groupId}/schedules/by-date`, {
    params: { startDate, endDate },
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getGroupScheduleById = (groupId, scheduleId) => {
  return axios.get(
    `${API_BASE_URL}/groups/${groupId}/schedules/${scheduleId}`,
    {
      headers: { Authorization: localStorage.getItem("token") },
    }
  );
};

export const createSchedules = (schedule) => {
  return axios.post(`${API_BASE_URL}/schedules`, schedule, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const updateSchedule = (id, updatedSchedule) => {
  return axios.put(`${API_BASE_URL}/schedules/${id}`, updatedSchedule, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deleteSchedulesById = (id) => {
  return axios.delete(`${API_BASE_URL}/schedules/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
