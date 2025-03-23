
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects
export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

// Experiences
export const getExperiences = async () => {
  const response = await api.get('/experiences');
  return response.data;
};

// Skills
export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

export const getSkillsByCategory = async (category: string) => {
  const response = await api.get(`/skills/category/${category}`);
  return response.data;
};

// Education
export const getEducation = async () => {
  const response = await api.get('/education');
  return response.data;
};

// Contact
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export default api;
