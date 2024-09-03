import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";
const ServiceModules = dynamic(() => import("@/modules/Service"), {
  loading: () => <Preloader />,
});

export default function Service() {
  return (
    <main>
      <Head>
        <title>Diploma Courses - Monark University</title>
        <meta
          name="description"
          content="Explore the Diploma Courses offered by Monark University, including specialized programs in Automobile Engineering, Civil Engineering, Computer Engineering, Electrical Engineering, Electronics and Communications Engineering, IT Engineering, Mechanical Engineering, and MLT. Find detailed information about each course's structure, eligibility, and career opportunities."
        />
        <meta
          name="keywords"
          content="Monark University diploma courses, diploma in Automobile Engineering, diploma in Civil Engineering, diploma in Computer Engineering, diploma in Electrical Engineering, diploma in Electronics and Communications Engineering, diploma in IT Engineering, diploma in Mechanical Engineering, diploma in MLT, Monark University engineering diplomas, Monark University MLT diploma"
        />
      </Head>
      <Header />
      <ServiceModules />
      <Footer />
    </main>
  );
}
