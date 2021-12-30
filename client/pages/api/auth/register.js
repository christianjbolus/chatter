import api from '../../../services/apiConfig';

export default async function handler(req, res) {
  if (req.method !== 'POST') return;
  try {
    const resp = await api.post('/users/', { user: req.body });
    res.json(resp.data);
  } catch (error) {
    res.json(error);
  }
}
