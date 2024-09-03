import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const FacultyModules = dynamic(() => import("@/modules/Faculty"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Faculty - Monark University</title>
        <meta
          name="description"
          content="Discover the Faculty page at Monark University, featuring comprehensive information about our diverse academic departments, including Engineering and Technology, Science, Arts, and more. Explore our state-of-the-art buildings, equipment, and courses offered in each department."
        />
		<meta
          name="keywords"
          content="Monark University faculty, faculty departments Monark University, Monark University Engineering and Technology, Monark University Science department, Monark University Arts, Monark University Physiotherapy, Monark University Management, Monark University Commerce, Monark University Law, Monark University Nursing, Monark University Computer Application, Monark University Education, Monark University Social Work, Monark University Pharmacy, Monark University Ayurveda, Monark University Homeopathy, Monark University IT, Monark University Music, Monark University buildings and equipment"
        />
      </Head>
      <Header />
      <FacultyModules />
      <Footer />
    </main>
  );
}
