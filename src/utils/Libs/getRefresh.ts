import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './getToken';
import { tokenReissue } from 'api/member';
import { apiClient } from './apiClient';

interface TokenResponse {
  newAuthorization: string;
}

export async function getRefresh(
  err: AxiosError
): Promise<AxiosResponse | Promise<never>> {
  const originalRequest = err.config as AxiosRequestConfig & {
    _retry?: boolean;
  };

  if (
    err.response &&
    (err.response.status === 401 || err.response.status === 403) &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;

    try {
      const { RefreshToken } = (await getToken(null)) as {
        RefreshToken: string;
      };
      const tokenResponse = (await tokenReissue(
        'Bearer ' + RefreshToken,
        null
      )) as TokenResponse;

      if (tokenResponse && tokenResponse.newAuthorization) {
        originalRequest.headers = originalRequest.headers || {};
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
