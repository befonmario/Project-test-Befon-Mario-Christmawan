import axios from 'axios';

const api = axios.create({
  baseURL: 'https://suitmedia-backend.suitdev.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
