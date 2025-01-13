import axios from 'axios';
import { API_CONFIG } from './config';

export const apiClient = axios.create({
  baseURL: API_CONFIG.NBP_BASE_URL,
  headers: API_CONFIG.DEFAULT_HEADERS,
});
