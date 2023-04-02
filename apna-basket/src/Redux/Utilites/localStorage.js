// Set an item in localStorage
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get an item from localStorage
export const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};

// Remove an item from localStorage
export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
