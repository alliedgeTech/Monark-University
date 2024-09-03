import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutUsModules = dynamic(() => import("@/modules/AboutUs"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>About Us - Monark University</title>
        <meta
          name="description"
          content="Learn about Monark University, including our approvals and recognitions, leadership team, and key officials. Explore the profiles of our deans, officers, and the SGRC committee, dedicated to maintaining the highest standards of education and administration."
        />
        <meta
          name="keywords"
          content="Monark University about us, Monark University approvals, Monark University recognitions, Monark University leadership team, Monark University deans, Monark University officers, Monark University SGRC committee, Monark University administration"
        />
      </Head>
      <Header />
      <AboutUsModules />
      <Footer />
    </main>
  );
}
