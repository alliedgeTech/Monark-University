import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const CareerModules = dynamic(() => import("@/modules/Careerdetails"), {
  loading: () => <Preloader />,
});

export default function Career() {
  return (
    <main>
      <Head>
        <title>Careers- Monark University</title>
        <meta
          name="description"
          content="Apply for exciting career opportunities at Monark University through our dedicated application form. Explore various positions and contribute to our dynamic team while advancing your career in a supportive and innovative environment."
        />
		<meta
          name="keywords"
          content="Monark University career opportunities, apply for jobs Monark University, Monark University application form, career positions Monark University, Monark University employment, Monark University job openings"
        />
      </Head>
      <Header />
	  <CareerModules />
	  <Footer />
    </main>
  );
}
