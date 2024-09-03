import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const InfrastructureModules = dynamic(
  () => import("@/modules/Infrastructure2"),
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
          content="Explore the Infrastructure page of Monark University to view detailed information and images of our essential facilities. Discover the well-resourced university library and comfortable hostel accommodations that support a thriving academic environment."
        />
		<meta
          name="keywords"
          content="Monark University infrastructure, Monark University library, Monark University hostel, university library Monark University, Monark University hostel facilities, campus infrastructure Monark University, Monark University accommodations, Monark University facilities overview"
        />
      </Head>
      <Header />

      <InfrastructureModules />

      <Footer />
    </main>
  );
}
