import AppContextProvider from "../src/context";
import Layout from "../layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
};

export default MyApp;
