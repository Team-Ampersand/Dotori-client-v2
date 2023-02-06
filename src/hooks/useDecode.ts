import jwt from 'jwt-decode';
import { parseCookies } from 'nookies';
import { RoleType } from '../types/Role';

export const useDecode = () => {
    const {Authorization} = parseCookies()
    const user:RoleType = jwt(Authorization ?? '');
	return user;
};