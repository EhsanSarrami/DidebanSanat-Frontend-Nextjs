import StyleProvider from "../styles";
// import components
import MainNavbar from "../src/components/main-navbar";
import MainFooter from "../src/components/main-footer";
import CallToActionTwo from "../src/components/call-to-actions/call-to-action-two";
import { Toaster } from "react-hot-toast";
import ThemeSwitcher from "../src/components/ThemeSwitcher";

const Layout = ({ children }) => {
  return (
    <StyleProvider>
      <MainNavbar />
      <main>{children}</main>
      <CallToActionTwo />
      <MainFooter />
      <Toaster toastOptions={{ className: "hot-toast-container" }} />
      <ThemeSwitcher />
    </StyleProvider>
  );
};

export default Layout;
