import api from './apiConfig';

export const getAllChats = async () => {
  try {
    const res = await api.get('/chats');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getOneChat = async id => {
  try {
    const res = await api.get(`/chats/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createChat = async chatData => {
  try {
    const res = await api.post('/chats', { chat: chatData });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateChat = async (id, chatData) => {
  try {
    const res = await api.put(`/chats/${id}`, { chat: chatData });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteChat = async id => {
  try {
    const res = await api.delete(`/chats/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
