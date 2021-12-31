import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://chatter-app-server.herokuapp.com/'
    : 'http://localhost:3000';

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 24 * 30 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('authorize', credentials);
        const { username, password } = credentials;
        try {
          const {
            data: { userData, accessToken },
          } = await axios.post(`${URL}/auth/login`, {
            authentication: { username, password },
          });
          return { userData, accessToken };
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],

  callbacks: {
    redirect: async ({ baseUrl }) => {
      return baseUrl;
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.currentUser = user.userData;
        token.accessToken = user.accessToken;
      } else {
        const { userData, accessToken } = await refreshToken(token);
        token.currentUser = userData;
        token.accessToken = accessToken;
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.currentUser = token.currentUser;
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

async function refreshToken(token) {
  const res = await axios.get(`${URL}/auth/refresh`, {
    headers: { authorization: `Bearer ${token.accessToken}` },
  });
  return res.data;
}
