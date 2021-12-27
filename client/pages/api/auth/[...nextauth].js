import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '../../../services/apiConfig';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const { data: { user, token } } = await api.post('/auth/login', {
            authentication: { username, password },
          });
            // console.log(token)
            user.token = token
          return user
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({token, user}) => {
      // console.log('jwt callback', user, token)
      if (user) {
        token.user = user;
      }
      return token;
    },

    session: async ({session, token}) => {
      // console.log('session callback', session, token)
      session.user = token.user;
      return session;
    },

    signIn: async ({user, account}) => {
      return user;
    }
  },
});
