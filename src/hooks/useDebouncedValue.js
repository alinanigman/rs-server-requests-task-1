import { useEffect, useState } from "react";
import { DEBOUNCE_TIMEOUT } from "@/constants";

export const useDebouncedValue = (value, delay = DEBOUNCE_TIMEOUT) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
};
