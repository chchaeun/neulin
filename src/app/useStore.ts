import { useState } from "react";

const useStore = (key: string) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(key) || "{}")
  );

  const setStoreData = (data: Record<string, object>) => {
    setData(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [data, setStoreData];
};

export { useStore };
