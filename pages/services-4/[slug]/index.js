import { useRouter } from "next/router";
import Services from "@/data/services";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceDetailsModules = dynamic(() => import("@/modules/research"), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
  const router = useRouter();
  const { asPath } = router;
  const serviceSlug = asPath.split("/")[2];

  const singleService = Services.filter((service) => {
    return service.slug === serviceSlug;
  });

  return (
    <main>
      <Head>
        <title>Research - Monark University</title>
        <meta
          name="description"
          content="Explore Monark University's diverse research courses designed to foster innovation and academic excellence. Discover detailed information about each research program, including opportunities for advanced studies and practical research experiences."
        />
        <meta
          name="keywords"
          content="Monark University research courses, research programs Monark University, research opportunities Monark University, advanced studies Monark University, academic research Monark University"
        />
      </Head>
      <Header />
      <ServiceDetailsModules item={singleService[0]} />
      <Footer />
    </main>
  );
}
