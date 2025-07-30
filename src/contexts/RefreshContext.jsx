import { createContext, useContext, useState } from "react";

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag((prev) => !prev);

  return (
    <RefreshContext.Provider value={{ refreshFlag, refresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);
