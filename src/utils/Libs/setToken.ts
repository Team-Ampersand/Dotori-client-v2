import { GetServerSidePropsContext } from "next";
import { setCookie } from 'nookies'

export const setToken = (Authorization:string, RefreshToken:string , ctx:GetServerSidePropsContext|null): void => {
    setCookie(ctx, 'Authorization', Authorization, {maxAge: 10800,path: '/',}) // 3시간
    setCookie(ctx, 'RefreshToken', RefreshToken, {maxAge: 604800,path: '/',}) // 일주일
}