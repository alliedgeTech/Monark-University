import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const CalanderModules = dynamic(() => import("@/modules/Calander"), {
  loading: () => <Preloader />,
});

export default function Calander() {
  return (
    <main>
      <Head>
        <title>Academic Calander- Monark University</title>
        <meta
          name="description"
          content="Stay informed with the official academic calendar of Monark University. Access detailed schedules for all programs and branches, and download the academic calendar PDF for important dates and deadlines."
        />
		<meta
          name="keywords"
          content="Monark University academic calendar, academic schedule Monark University, Monark University programs calendar, Monark University branches calendar, academic calendar PDF Monark University, Monark University important dates"
        />
      </Head>
      <Header />
	  <CalanderModules />
	  <Footer />
    </main>
  );
}
