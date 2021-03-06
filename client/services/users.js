import api from './apiConfig';

export const getOneUser = async username => {
  try {
    const res = await api.get(`/users/${username}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (username, userData) => {
  try {
    const res = await api.put(`/users/${username}`, { user: userData });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserChats = async username => {
  try {
    const res = await api.get(`/users/${username}/chats`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
