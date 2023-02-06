import { destroyCookie } from 'nookies'

export const removeToken = (): void => {
    destroyCookie(null, 'Authorization');
    destroyCookie(null, 'RefreshToken');   
}