import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceThreeModules = dynamic(() => import("@/modules/ServiceThree"), {
  loading: () => <Preloader />,
});

export default function ServiceThree() {
  return (
    <main>
      <Head>
        <title>PG Courses(Masters) - Monark University</title>
        <meta
          name="description"
          content="Discover Monark University's Master’s programs offering advanced education in various fields. Explore our comprehensive range of postgraduate courses including Masters of Engineering, Masters of Science, Masters of Business Administration, and more."
        />
        <meta
          name="keywords"
          content="Monark University Masters programs, PG courses Monark University, Masters of Engineering Monark University, Masters of Science Monark University, Masters of Business Administration Monark University, Masters of Commerce Monark University, Masters of Law Monark University, Masters of Computer Application Monark University, Masters of Education Monark University, Masters of Arts Monark University, Masters of Social Work Monark University"
        />
      </Head>
      <Header />
      <ServiceThreeModules />
      <Footer />
    </main>
  );
}
