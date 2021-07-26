import api from './apiConfig';

export const getOneUser = username => {
  try {
    const res = await api.get(`/users/${username}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
