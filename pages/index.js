import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const HomeOneModules = dynamic(() => import("@/modules/HomeOne"), {
  loading: () => <Preloader />,
});

export default function Home() {
  return (
    <main>
      <Head>
        <title>Welcome to Monark University</title>
        <meta
          name="description"
          content="Monark University offers a diverse range of undergraduate, graduate, and doctoral programs. Explore our departments, research opportunities, and campus life. Discover why Monark University is the right choice for your educational journey."
        />
        <meta
          name="keywords"
          content="Monark University, undergraduate programs, graduate programs, doctoral programs, research opportunities, campus life, higher education"
        />
      </Head>
      <Header />
      <HomeOneModules />
      <Footer />
    </main>
  );
}
