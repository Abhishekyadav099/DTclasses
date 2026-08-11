import api from './api';

const getActiveSignals = async () => {
  const response = await api.get('/signals');
  return response.data;
};

const getAllSignals = async () => {
  const response = await api.get('/signals/all');
  return response.data;
};

export default {
  getActiveSignals,
  getAllSignals
};
