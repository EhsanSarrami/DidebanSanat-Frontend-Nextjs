import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./ThemeConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={true ? light : dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
