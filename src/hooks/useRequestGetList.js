import { useState, useEffect } from "react";
import { useRefresh } from "../contexts/RefreshContext.jsx";
export const useRequestGetList = () => {
  const { refreshFlag } = useRefresh();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched list:", data);
        setList(data);
      })
      .catch((error) => {
        console.error("Error fetching list:", error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshFlag]);
  return {
    list,
    isLoading,
  };
};
