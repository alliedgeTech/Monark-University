import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceModules = dynamic(() => import("@/modules/research"), {
  loading: () => <Preloader />,
});

export default function Service() {
  return (
    <main>
      <Head>
        <title>Research Courses(Masters) - Monark University</title>
        <meta
          name="description"
          content="Explore the PhD programs offered by Monark University. Learn about our diverse research opportunities, departmental specializations, and the support provided to doctoral students in their journey towards academic and professional excellence."
        />
        <meta
          name="keywords"
          content="Monark University PhD programs, PhD courses Monark University, doctoral research Monark University, PhD opportunities Monark University, advanced research degrees Monark University"
        />
      </Head>
      <Header />
      <ServiceModules />
      <Footer />
    </main>
  );
}
