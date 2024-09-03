import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const NpeModules = dynamic(() => import("@/modules/Npe"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Head>
        <title>NPE - Monark University</title>
        <meta
          name="description"
          content="Visit the NPE page at Monark University to explore details about ongoing workshops under the National Program for Education (NPE). Find information on current workshop topics, schedules, and registration details to enhance your educational and professional skills."
        />
		<meta
          name="keywords"
          content="NPE workshops Monark University, National Program for Education workshops, ongoing workshops Monark University, Monark University NPE workshops, workshop schedules NPE, Monark University educational workshops, NPE registration details"
        />
      </Head>
      <Header />
	  <NpeModules />
	  <Footer />
    </main>
  );
}
