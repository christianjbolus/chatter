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
          const user = await api.post('/auth/login', {
            authentication: { username, password },
          });
          return user;
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
});
