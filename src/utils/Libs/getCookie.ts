export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift() || null;
    if (cookieValue) {
      const decodedValue = decodeURIComponent(cookieValue);
      return decodedValue.startsWith('Bearer ')
        ? decodedValue.substring(7)
        : decodedValue;
    }
  }
  return null;
};
