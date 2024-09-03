import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const CircularModules = dynamic(() => import("@/modules/Circular"), {
  loading: () => <Preloader />,
});

export default function Circular() {
  return (
    <main>
      <Head>
        <title>Circular - Monark University</title>
        <meta
          name="description"
          content="Access Monark University's annual circulars through our dedicated page. Find circulars by date, view important updates, and download documents directly for easy reference and stay informed about university announcements."
        />
		 <meta
          name="keywords"
          content="Monark University circulars, university announcements, Monark University updates, circulars download Monark University, Monark University documents, annual circulars Monark University"
        />
      </Head>
      <Header />

      <CircularModules />

      <Footer />
    </main>
  );
}
