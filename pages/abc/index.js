import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const AbcModules = dynamic(() => import("@/modules/Abc"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>ABC Card - Monark University</title>
        <meta
          name="description"
          content="Apply for your ABC Card at Monark University and unlock a range of exclusive benefits. Streamline your academic journey with easy access to campus resources, student discounts, and more. Get your ABC Card today!"
        />
        <meta
          name="keywords"
          content="ABC Card Monark University, Monark University student card, campus resources card, student discounts Monark University, apply for ABC Card, Monark University benefits, student ID card Monark University"
        />
      </Head>
      <Header />
      <AbcModules />
      <Footer />
    </main>
  );
}
