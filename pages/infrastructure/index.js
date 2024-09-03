import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";
const InfrastructureModules = dynamic(
  () => import("@/modules/Infrastructure"),
  {
    loading: () => <Preloader />,
  }
);

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Infrastructure - Monark University</title>
        <meta
          name="description"
          content="Discover the comprehensive infrastructure of Monark University, featuring state-of-the-art laboratories, a modern auditorium, a well-equipped conference hall, and expansive indoor and outdoor sports grounds and courts. Explore detailed information and pictures showcasing our facilities."
        />
		<meta
          name="keywords"
          content="Monark University infrastructure, Monark University laboratories, Monark University auditorium, Monark University conference hall, Monark University sports grounds, Monark University sports courts, Monark University facilities, campus infrastructure Monark University"
        />
      </Head>
      <Header />

      <InfrastructureModules />

      <Footer />
    </main>
  );
}
