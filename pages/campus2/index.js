import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const CampusModules = dynamic(() => import("@/modules/Campus2"), {
  loading: () => <Preloader />,
});

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Campus Life 2- Monark University</title>
        <meta
          name="description"
          content="Relive the cherished memories of campus life at Monark University through pictures of our celebrated days. From Sports Day to Arts and Gallery Day, and Yoga Day, explore how our vibrant community comes together to celebrate and create lasting memories."
        />
		<meta
          name="keywords"
          content="Monark University campus life, Monark University memories, Monark University Sports Day, Monark University Arts and Gallery Day, Monark University Yoga Day, Monark University celebrations, Monark University student events"
        />
      </Head>
      <Header />
      <CampusModules />
      <Footer />
    </main>
  );
}
