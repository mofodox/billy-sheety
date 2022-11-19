import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar color={"dark"} dark expand={"md"} container={true} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
