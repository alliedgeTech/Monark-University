import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutUs3Modules = dynamic(() => import("@/modules/AboutUs3"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>About Us3 - Monark University</title>
        <meta
          name="description"
          content="Read the inspiring messages from Dr. Hasmukhbharthi Goswami, President of Monark University, Dr. Satishbharthi Goswami, Vice President, and Dr. Jayesh K. Ratnadhariya, Provost. Their leadership and vision guide our commitment to academic excellence and innovation."
        />
		<meta
          name="keywords"
          content="Monark University president's message, Dr. Hasmukhbharthi Goswami, Monark University vice president's message, Dr. Satishbharthi Goswami, Monark University provost's message, Dr. Jayesh K. Ratnadhariya, Monark University leadership, Monark University vision"
        />
      </Head>
      <Header />
      <AboutUs3Modules />
      <Footer />
    </main>
  );
}
