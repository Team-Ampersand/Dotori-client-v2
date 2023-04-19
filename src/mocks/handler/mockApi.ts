const mockApi = (path: string) =>
  new URL(path, process.env.NEXT_PUBLIC_BASE_URL).toString();

export default mockApi;
