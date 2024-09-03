import { useRouter } from "next/router";
import after12 from "@/data/after12";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceDetailsModules = dynamic(() => import("@/modules/After12"), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
  const router = useRouter();
  const { asPath } = router;
  const serviceSlug = asPath.split("/")[2];

  const singleService = after12.filter((service) => {
    return service.slug === serviceSlug;
  });

  return (
    <main>
      <Head>
        <title>UG Courses - Monark University</title>
        <meta
          name="description"
          content="Discover the diverse range of Undergraduate (UG) courses offered at Monark University for students after 12th grade. Explore detailed information on programs across various fields including Engineering, Science, Arts, Management, Law, and more. Learn about course structure, eligibility criteria, and career prospects to make an informed decision about your academic future."
        />
		<meta
          name="keywords"
          content="Monark University UG courses, Undergraduate courses after 12th grade, Monark University programs, Engineering UG courses, Science UG courses, Arts UG courses, Management UG courses, Law UG courses, Monark University undergraduate programs, admission to UG courses Monark University"
        />
      </Head>
      <Header />

      <ServiceDetailsModules item={singleService[0]} />

      <Footer />
    </main>
  );
}
