import { createContext, useState } from "react";
import { initialStates } from "./states";
import { setStoreage } from "../helper";

export const AppContext = createContext(initialStates);

const AppContextProvider = ({ children }) => {
  // use state hook
  const [state, setState] = useState(initialStates);

  // change theme function
  const changeTheme = () => {
    setState((prev) => ({ ...prev, darkTheme: !prev.darkTheme }));
  };

  return (
    <AppContext.Provider
      value={{
        changeTheme,
        darkTheme: state.darkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;