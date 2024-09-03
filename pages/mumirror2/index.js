import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const Mumirror2Modules = dynamic(() => import("@/modules/Mumirror2"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>MU Mirror - Monark University</title>
        <meta
          name="description"
          content="Explore the MuMirror page for Monark University to access the 2023 edition of our annual magazine. Discover highlights, achievements, and key events from the past year, and stay updated with our university's latest developments and stories."
        />
		<meta
          name="keywords"
          content="MuMirror Monark University, Monark University magazine 2023, annual magazine Monark University, Monark University 2023 highlights, Monark University achievements, Monark University events 2023, Monark University news"
        />
      </Head>
      <Header />

      <Mumirror2Modules />

      <Footer />
    </main>
  );
}
