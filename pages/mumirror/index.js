import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";
const MumirrorModules = dynamic(() => import("@/modules/Mumirror"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>MU Mirror - Monark University</title>
        <meta
          name="description"
          content="Explore the 2022 edition of the MUMirror, Monark University's annual magazine. Discover highlights, achievements, and significant events from the year, showcasing the vibrant campus life and academic progress of Monark University."
        />
		<meta
          name="keywords"
          content="MUMirror 2022, Monark University magazine, Monark University annual magazine, Monark University highlights 2022, campus life Monark University, Monark University achievements, Monark University events 2022"
        />
      </Head>
      <Header />

      <MumirrorModules />

      <Footer />
    </main>
  );
}
