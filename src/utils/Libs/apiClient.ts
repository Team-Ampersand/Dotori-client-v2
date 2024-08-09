import axios from 'axios';
import BASE_HEADER from '../Config/Config.json';
import { getRefresh } from './getRefresh';
import { getCookie } from './getCookie';
import { MemberController } from './requestUrls';
import { setToken } from './setToken';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: BASE_HEADER,
});

let isRefreshing = false;
let failedRequestsQueue: any[] = [];

const onRerefreshToken = (token: string) => {
  failedRequestsQueue.forEach((callback) => callback(token));
  failedRequestsQueue = [];
};

const addFailedRequestToQueue = (callback: (token: string) => void) => {
  failedRequestsQueue.push(callback);
};

apiClient.interceptors.request.use(getRefresh);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { response } = error;

    if (response && response.status === 403) {
      if (!isRefreshing) {
        isRefreshing = true;
        const checkRefreshToken = getCookie('RefreshToken');

        try {
          const { data } = await apiClient.patch(
            MemberController.auth,
            {},
            {
              headers: {
                'Refresh-Token': 'Bearer ' + checkRefreshToken,
              },
            }
          );
          const newAuthorization = data.accessToken;
          const refreshToken = data.refreshToken;
          setToken(newAuthorization, refreshToken, null);

          apiClient.defaults.headers[
            'Authorization'
          ] = `Bearer ${newAuthorization}`;
          isRefreshing = false;
          onRerefreshToken(newAuthorization);

          return apiClient(originalRequest);
        } catch (e: any) {
          isRefreshing = false;
          console.error(e);
          return Promise.reject(error);
        }
      }

      return new Promise((resolve) => {
        addFailedRequestToQueue((token) => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          resolve(apiClient(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);
