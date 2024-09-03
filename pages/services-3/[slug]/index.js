import { useRouter } from "next/router";
import pgcourses from "@/data/pgcourses";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ServiceDetailsModules = dynamic(() => import("@/modules/pgcourses"), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
  const router = useRouter();
  const { asPath } = router;
  const serviceSlug = asPath.split("/")[2];

  const singleService = pgcourses.filter((service) => {
    return service.slug === serviceSlug;
  });

  return (
    <main>
      <Head>
        <title>PG Courses(Masters) - Monark University</title>
        <meta
          name="description"
          content="Explore the comprehensive range of postgraduate (Masters) courses offered by Monark University. Our programs include advanced studies in various fields such as Engineering, Science, Arts, Management, and more, designed to enhance expertise and career prospects."
        />
        <meta
          name="keywords"
          content="Monark University postgraduate courses, PG courses Monark University, Masters in Engineering Monark University, Masters in Science Monark University, Masters in Arts Monark University, Masters in Management Monark University, Monark University advanced studies, Monark University career enhancement programs"
        />
      </Head>
      <Header />
	  <ServiceDetailsModules item={singleService[0]} />
	  <Footer />
    </main>
  );
}
