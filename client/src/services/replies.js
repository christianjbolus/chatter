import api from './apiConfig';

export const getAllReplies = async (chatId) => {
  try {
    const res = await api.get(`/chats/${chatId}/replies`)
    return res.data
  } catch (error) {
    throw error;
  }
}

export const postReply = async (chatId, replyData) => {
  try {
    const res = await api.post(`/chats/${chatId}/replies`, { reply: replyData });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const putReply = async (chatId, replyId, replyData) => {
  try {
    const res = await api.put(`/chats/${chatId}/replies/${replyId}`, { reply: replyData });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReply = async (chatId, replyId) => {
  try {
    const res = await api.delete(`/chats/${chatId}/replies/${replyId}`);
    return res;
  } catch (error) {
    throw error;
  }
};
