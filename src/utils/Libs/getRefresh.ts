import { AxiosRequestConfig } from "axios";
import { tokenReissue } from "../../api/member";
import { getToken } from "./getToken";

export const getRefresh = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const {Authorization, RefreshToken} = await getToken(null)
  
  if (config.headers && Authorization){
    config.headers["Authorization"] = `Bearer ${Authorization}`
  }
  else if (!Authorization && config.url?.includes("/email") && config.url.includes("/auth")){
    const {newAuthorization}: any = await tokenReissue(RefreshToken || "",null)
    if (config.headers) config.headers["Authorization"] = `Bearer ${newAuthorization}`
  }

  return config;
};