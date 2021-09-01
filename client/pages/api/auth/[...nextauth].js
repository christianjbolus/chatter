import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import api from '../../../services/apiConfig';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const res = await api.post('/auth/login', {
            authentication: { username, password },
          });
          // console.log(res.data.user);
          return {
            user: res.data.user,
          };
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],

  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      console.log(user)
      if (user) {
        token.user = user.user;
      }
      return token;
    },

    session: async (session, token) => {
      session.user = token.user;
      return session;
    },
  },
});
