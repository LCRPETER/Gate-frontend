import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/groups";

export const getAllGroupes = () =>
  axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const getStudentsByGroupId = (groupId) =>
  axios.get(`${API_URL}/${groupId}/student`, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const postGroupes = (group) =>
  axios.post(API_URL, group, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export const deleteGroupById = (id) => {
  console.log("Deleting Group ID: ", id);
  return axios.delete(`${API_URL}/groups/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
