import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetList = (refreshFlag) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(db, "todos");
    return onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const todosArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setList(todosArray);
      setIsLoading(false);
    });
  }, [refreshFlag]);
  return {
    list,
    isLoading,
  };
};
