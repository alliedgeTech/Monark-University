import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const Mumirror3Modules = dynamic(() => import("@/modules/Mumirror3"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>MU Mirror - Monark University</title>
        <meta
          name="description"
          content="Visit the MuMirror page at Monark University to access the 2024 edition of our annual magazine. Explore the latest highlights, significant achievements, and notable events from the past year, showcasing the university's growth and vibrant campus life."
        />
		<meta
          name="keywords"
          content="MuMirror Monark University, Monark University magazine 2024, annual magazine Monark University, Monark University 2024 highlights, Monark University achievements 2024, Monark University events 2024, Monark University news"
        />
      </Head>
      <Header />

      <Mumirror3Modules />

      <Footer />
    </main>
  );
}
