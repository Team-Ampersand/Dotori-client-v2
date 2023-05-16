import { createHmac } from 'crypto';

const jwtSignature = (header: string, payload: string) =>
  createHmac('sha256', '')
    .update(header + '.' + payload)
    .digest('base64')
    .replace('=', '');

export default jwtSignature;
