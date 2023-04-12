import { mutate } from 'swr';

export const clearCache = () =>
  mutate(() => true, undefined, { revalidate: false });
