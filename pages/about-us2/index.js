import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutUs2Modules = dynamic(() => import("@/modules/AboutUs2"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>About Us2 - Monark University</title>
        <meta
          name="description"
          content="Discover the rich history of Monark University and learn about the development of our academic departments. Explore how we've grown since our founding, with each department's establishment year marking milestones in our journey towards educational excellence."
        />
		<meta
          name="keywords"
          content="Monark University history, Monark University departments, Monark University establishment year, Monark University historical background, Monark University academic growth, Monark University educational excellence"
        />
      </Head>
      <Header />
      <AboutUs2Modules />
      <Footer />
    </main>
  );
}
