import axios from 'axios';
import { baseURL } from '../Config/Config';
import { BASE_HEADER } from '../Config/Config.json';
import { getRefresh } from './getRefresh';

export const apiClient = axios.create({
	baseURL: baseURL,
	headers: BASE_HEADER,
});

apiClient.interceptors.request.use(getRefresh);