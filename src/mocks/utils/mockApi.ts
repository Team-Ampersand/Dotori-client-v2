const mockApi = (path: string) =>
  process.env.NEXT_PUBLIC_BASE_URL + path.slice(1);

export default mockApi;
