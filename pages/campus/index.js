import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";
const CampusModules = dynamic(() => import("@/modules/Campus"), {
  loading: () => <Preloader />,
});

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Campus Life- Monark University</title>
        <meta
          name="description"
          content="Experience the vibrant campus life at Monark University through our collection of event highlights. From cultural celebrations to NCC and NSS activities, discover the dynamic and enriching environment that defines our student experience."
        />
		<meta
          name="keywords"
          content="Monark University campus life, Monark University cultural events, Monark University NCC, Monark University NSS, Monark University student life, Monark University campus activities, Monark University events"
        />
      </Head>
      <Header />
	  <CampusModules />
	  <Footer />
    </main>
  );
}
