export const setStoreage = (key, value) =>
  typeof window !== "undefined" && localStorage.setItem(key, value);

export const getStoreage = (key) =>
  typeof window !== "undefined" && localStorage.getItem(key);
  
export const rmStoreage = (key) =>
  typeof window !== "undefined" && localStorage.removeItem(key);
