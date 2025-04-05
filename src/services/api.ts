
import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth services
export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getUserProfile: async (userId: string) => {
    const response = await api.get(`/auth/profile/${userId}`);
    return response.data;
  },
  updateProfile: async (userId: string, userData: any) => {
    const response = await api.put(`/auth/profile/${userId}`, userData);
    return response.data;
  }
};

// Blood request services
export const bloodRequestService = {
  getAllRequests: async () => {
    const response = await api.get('/blood-requests');
    return response.data;
  },
  createRequest: async (requestData: any) => {
    const response = await api.post('/blood-requests', requestData);
    return response.data;
  },
  getRequestById: async (requestId: string) => {
    const response = await api.get(`/blood-requests/${requestId}`);
    return response.data;
  },
  updateRequest: async (requestId: string, requestData: any) => {
    const response = await api.put(`/blood-requests/${requestId}`, requestData);
    return response.data;
  },
  deleteRequest: async (requestId: string) => {
    const response = await api.delete(`/blood-requests/${requestId}`);
    return response.data;
  },
  respondToRequest: async (requestId: string, donorData: { donorId: string, donorName: string }) => {
    const response = await api.post(`/blood-requests/${requestId}/respond`, donorData);
    return response.data;
  },
  getCompatibleDonors: async (bloodGroup: string) => {
    const response = await api.get(`/blood-requests/compatible-donors/${bloodGroup}`);
    return response.data;
  }
};

// Blood bank services
export const bloodBankService = {
  getAllBanks: async () => {
    const response = await api.get('/blood-banks');
    return response.data;
  },
  getBankById: async (bankId: string) => {
    const response = await api.get(`/blood-banks/${bankId}`);
    return response.data;
  },
  getNearbyBanks: async (latitude: number, longitude: number, maxDistance: number = 10) => {
    const response = await api.get(`/blood-banks/nearby/${latitude}/${longitude}/${maxDistance}`);
    return response.data;
  }
};

export default api;
