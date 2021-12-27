import api from './apiConfig';
import axios from 'axios'

export const loginUser = async loginData => {
  try {
    const res = await api.post('/auth/login', { authentication: loginData });
    localStorage.setItem('authToken', res.data.token);
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data.user;
  } catch (error) {
    return {error: error.response.data.errors}
  }
};

// export const registerUser = async registerData => {
//   try {
//     const res = await api.post('/users/', { user: registerData });
//     localStorage.setItem('authToken', res.data.token);
//     api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
//     return res.data.user;
//   } catch (error) {
//     return {error: error.response.data}
//   }
// };

export const registerUser = async registerData => {
  try {
    const res = await axios.post('/api/auth/register', registerData)
  } catch (error) {
    return({error: error.response.data})
  }
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const res = await api.get('/auth/verify');
      return res.data;
    }
    return null;
    
  } catch (error) {
    return
  }

};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};