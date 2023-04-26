import postRefreshToken from './auth/patch';
import postLogin from './auth/post';

export const handlers = [postLogin, postRefreshToken];
