import api from './apiConfig'

export const getAllChats = async () => {
  try {
    const res = await api.get('/chats')
    return res.data
  } catch (error) {
    
  }
}