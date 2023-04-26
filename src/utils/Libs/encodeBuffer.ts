const encodeBuffer = (data: Object) =>
  Buffer.from(JSON.stringify(data)).toString('base64').replace('=', '');

export default encodeBuffer;
