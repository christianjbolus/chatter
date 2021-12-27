import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://chatter-app-server.herokuapp.com/'
      : 'http://localhost:3000',
});

api.interceptors.request.use(async config => {
  const session = await getSession();
  config.headers.authorization = `Bearer ${session?.user.token}`;
  return config;
});

export default api;
