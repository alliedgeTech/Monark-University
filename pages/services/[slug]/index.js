import { useRouter } from "next/router";
import Services from "@/data/services";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceDetailsModules = dynamic(
  () => import("@/modules/ServiceDetails"),
  {
    loading: () => <Preloader />,
  }
);

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
        <title>Diploma Courses - Monark University</title>
        <meta
          name="description"
          content="Explore Monark University's Diploma Courses page to find detailed information on all available diploma programs. Learn about course structures, duration, eligibility criteria, and career prospects for each diploma course offered at our university."
        />
		<meta
          name="keywords"
          content="Monark University diploma courses, diploma programs Monark University, Monark University course information, diploma course details, Monark University program structure, career prospects diploma courses, Monark University eligibility criteria"
        />
      </Head>
      <Header />

      <ServiceDetailsModules item={singleService[0]} />

      <Footer />
    </main>
  );
}
