import api from './apiConfig';

export const registerUser = async registerData => {
  try {
    const res = await api.post('/users/', { user: registerData });
    return res.data.user;
  } catch (error) {
    return {error: error.response.data}
  }
};