import api from '../../../services/apiConfig'

async function handler(req, res) {
  if (req.method !== 'POST') return
  try {
    const resp = await api.post('/users/', { user: req.body });
    // localStorage.setItem('authToken', res.data.token);
    // api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    res.status(422).json(error.response.data)
  }
}

export default handler;