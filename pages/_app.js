import { useState, useEffect } from "react";
import AppContextProvider from "../src/context";
import Layout from "../layout";

const MyApp = ({ Component, pageProps }) => {
  // mouned states
  const [mouned, setMouned] = useState(false);

  // use effect hook to setting mounting state
  useEffect(() => setMouned(true), []);

  return (
    <AppContextProvider>
      {mouned && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AppContextProvider>
  );
};

export default MyApp;
