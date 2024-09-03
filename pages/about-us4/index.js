import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutUs4Modules = dynamic(() => import("@/modules/AboutUs4"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>About Us4 - Monark University</title>
        <meta
          name="description"
          content="Explore the vision and mission of Monark University, where we are committed to fostering innovation, academic excellence, and holistic development. Learn how our goals shape the future of education and contribute to societal progress."
        />
		<meta
          name="keywords"
          content="Monark University vision, Monark University mission, Monark University goals, educational excellence Monark University, Monark University innovation, Monark University holistic development, Monark University future of education"
        />
      </Head>
      <Header />
      <AboutUs4Modules />
      <Footer />
    </main>
  );
}
