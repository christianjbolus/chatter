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
          const { data: { user, token } } = await api.post('/auth/login', {
            authentication: { username, password },
          });
          user.token = token
          return user
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],

  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      // console.log('jwt callback', user, token)
      if (user) {
        token.user = user;
      }
      // console.log(token)
      return token;
    },

    session: async (session, token) => {
      session.user = token.user;
      console.log('Session callback', session);
      return session;
    },

    signIn: async (user, account) => {
      console.log('Sign in callback', user, account);
      return user;
    }
  },
});
