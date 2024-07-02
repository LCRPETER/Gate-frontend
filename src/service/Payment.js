import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/payments";

export const getAllPayments = () => {
  return axios.get(API_URL, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const createPayment = (subject) => {
  return axios.post(API_URL, subject, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const updatePaymentById = (id, updatedPayment) => {
  return axios.put(`${API_URL}/${id}`, updatedPayment, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const getPaymentById = (studentId) => {
  return axios.get(`${API_URL}/students/${studentId}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};

export const deletePaymentById = (id) => {
  return axios.delete(`${API_URL}/delete/${id}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
};
