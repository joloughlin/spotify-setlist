import { localStorageKey } from 'constants/values';

export const setLocalStorage = ({ authentication, users }) => {
  const byId = {
    [authentication.user]: users.byId[authentication.user],
  };
  const itemValue = JSON.stringify({
    authentication,
    users: {
      byId,
    },
  });

  try {
    localStorage.setItem(localStorageKey, itemValue);
  } catch (error) {
    console.log(`Local storage not set - ${error.message}`);
  }
};

export const readLocalStorage = () => {
  const itemValue = localStorage.getItem(localStorageKey);
  return itemValue ? JSON.parse(itemValue) : {};
};

export const clearLocalStorage = () => {
  localStorage.removeItem(localStorageKey);
};
