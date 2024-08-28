import { AxiosRequestConfig } from 'axios';
import { getToken } from './getToken';
import { MemberController } from './requestUrls';

export const setHeader = async (config: AxiosRequestConfig) => {
  if (typeof window !== 'object') return config;
  const { Authorization } = await getToken(null);

  if (
    config.headers &&
    Authorization &&
    !config.url?.includes(MemberController.auth)
  ) {
    config.headers['Authorization'] = Authorization;
  }

  return config;
};
