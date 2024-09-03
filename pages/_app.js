import { Providers } from "@/redux/providers";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "@/assets/css/nice-select.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome-pro.css";
import "@/assets/css/flaticon_xoft.css";
import "@/assets/css/flaticon_mycollection.css";
import "@/assets/scss/main.scss";
import "@/assets/css/spacing.css";
import "@/assets/css/meanmenu.css";
import "animate.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Monark University</title>
        <meta
          name="description"
          content="Welcome to Monark University. Explore our diverse programs, world-class faculty, and vibrant campus life. Join us for an exceptional educational journey."
        />
        <meta
          name="keywords"
          content="Monark University, higher education, undergraduate programs, postgraduate programs, campus life, university faculty, academic excellence, Monark University admissions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Monark University" />
        <meta property="og:title" content="Monark University" />
        <meta
          property="og:description"
          content="Welcome to Monark University. Explore our diverse programs, world-class faculty, and vibrant campus life. Join us for an exceptional educational journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Monark University" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default App;
