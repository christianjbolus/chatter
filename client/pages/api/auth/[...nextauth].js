import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '../../../services/apiConfig';

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
          } = await api.post('/auth/login', {
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
    jwt: async ({ token, user }) => {
      if (user) {
        token.currentUser = user.userData;
        token.accessToken = user.accessToken;
      } else {
        token.accessToken = await refreshToken(token)
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
  const res = await api.post('/auth/refresh', { authentication: { id: token.currentUser.id } });
  return res.data.accessToken;
}
