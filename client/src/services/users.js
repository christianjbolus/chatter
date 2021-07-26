import api from './apiConfig';

export const getOneUser = async username => {
  try {
    const res = await api.get(`/users/${username}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    throw error;
  }
};
