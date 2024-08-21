import axios from 'axios';
import BASE_HEADER from '../Config/Config.json';
import { getRefresh } from './getRefresh';
import { tokenReissue } from 'api/member';
import { MemberController } from './requestUrls';
import { setToken } from './setToken';
import { getToken } from './getToken';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: BASE_HEADER,
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalRequest = err.config;

    if (
      err.response &&
      (err.response.status === 401 || err.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { RefreshToken } = await getToken(null);
        const tokenResponse = await tokenReissue(
          'Bearer ' + RefreshToken,
          null
        );

        if (tokenResponse && tokenResponse.newAuthorization) {
          originalRequest.headers['Authorization'] =
            'Bearer ' + tokenResponse.newAuthorization;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);
