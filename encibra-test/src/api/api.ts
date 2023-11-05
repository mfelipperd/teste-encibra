import axios, { AxiosInstance } from 'axios';

// Crie uma instância do Axios com a base URL do servidor JSON (JSON Server)
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Substitua pela URL do seu servidor JSON (JSON Server)
});

export default api;