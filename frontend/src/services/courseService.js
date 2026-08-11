import api from './api';

const getAllCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

const getCourseLessons = async (courseId) => {
  const response = await api.get(`/courses/${courseId}/lessons`);
  return response.data;
};

export default {
  getAllCourses,
  getCourseById,
  getCourseLessons
};
