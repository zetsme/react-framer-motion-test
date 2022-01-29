import { useEffect, useState } from 'react';

export const useLocalStorage = (key) => {
  const [items, setItems] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const addListItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListListItem = [item, ...items];
    setItems(newListListItem);
  };

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id);
    setItems(removeArr);
  };

  return { items, addListItem, removeItem };
};
