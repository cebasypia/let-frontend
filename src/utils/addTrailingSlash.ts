export const addTrailingSlash = (url: string): string => {
  return url.endsWith('/') ? url : `${url}/`;
};
