import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://chatter-app-server.herokuapp.com/'
      : 'http://localhost:3000',
});

// Get access token from session for client-side requests
api.interceptors.request.use(async config => {
  const session = await getSession();
  config.headers.authorization = `Bearer ${session?.accessToken}`;
  return config;
});

export default api;
