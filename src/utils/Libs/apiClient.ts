import axios from 'axios';
import BASE_HEADER from '../Config/Config.json';
import { getRefresh } from './getRefresh';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: BASE_HEADER,
});

apiClient.interceptors.request.use(getRefresh);
