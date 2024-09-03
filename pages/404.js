import Footer from "@/components/Footer";
import ErrorModules from "@/modules/Error";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Not Found - Monark University</title>
        <meta
          name="description"
          content="Sorry, the page you are looking for does not exist. Explore other parts of Monark University's website or return to the homepage."
        />
      </Head>
      <Header />
      <ErrorModules />
      <Footer />
    </>
  );
}
