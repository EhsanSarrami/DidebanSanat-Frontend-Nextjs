import { useContext } from "react";
import { AppContext } from "../src/context";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./ThemeConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

const StyleProvider = ({ children }) => {
  // use context
  const { darkTheme } = useContext(AppContext);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
