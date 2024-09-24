import { createContext, useContext, useState, ReactNode } from "react";

// Define the context
const MyContext = createContext<any>(null);

// Create a provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<any>(null);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
};