import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceTwoModules = dynamic(() => import("@/modules/ServiceTwo"), {
  loading: () => <Preloader />,
});

export default function ServiceTwo() {
  return (
    <main>
      <Head>
        <title>UG Courses - Monark University</title>
        <meta
          name="description"
          content="Explore the diverse range of undergraduate courses offered by Monark University. Our programs include Bachelor of Engineering, Bachelor of Science, Bachelor of Business Administration, and many more, designed to equip students with the skills and knowledge for a successful career."
        />
        <meta
          name="keywords"
          content="Monark University undergraduate courses, UG courses Monark University, Bachelor of Engineering Monark University, Bachelor of Science Monark University, Bachelor of Business Administration Monark University, Bachelor of Ayurvedic Medicine and Surgery Monark University, Bachelor of Homeopathy Medicine and Surgery Monark University, Bachelor of Physiotherapy Monark University, Bachelor of Science in Nursing Monark University, Bachelor of Commerce Monark University, Bachelor of Law Monark University, Bachelor of Computer Application Monark University, Bachelor of Arts Monark University, Bachelor of Social Work Monark University, BSc + MSc IT Monark University, Bachelor of Medical Laboratory Technology Monark University, Bachelor of Pharmacy Monark University"
        />
      </Head>
      <Header />

      <ServiceTwoModules />

      <Footer />
    </main>
  );
}
