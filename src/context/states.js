import { getStoreage } from "../helper";

export const initialStates = {
  darkTheme: getStoreage("darkTheme")
    ? JSON.parse(getStoreage("darkTheme"))
    : false,
};
