import { useRouter } from "next/router";
import syllabus from "@/data/syllabus";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";

const SyllabusDetailsModules = dynamic(() => import("@/modules/Syllabus"), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
  const router = useRouter();
  const { asPath } = router;
  const serviceSlug = asPath.split("/")[2];

  const singleService = syllabus.filter((service) => {
    return service.slug === serviceSlug;
  });

  return (
    <main>
      <Head>
        <title>Syllabus - Monark University</title>
        <meta
          name="description"
          content="Explore detailed syllabus information for all courses at Monark University. Get insights into course content, learning objectives, and academic requirements for each program offered. Stay informed and well-prepared with our comprehensive syllabus details."
        />
        <meta
          name="keywords"
          content="Monark University syllabus details, course syllabus Monark University, academic syllabus Monark University, syllabus information Monark University, Monark University course content, learning objectives Monark University"
        />
      </Head>
      <Header />
      <SyllabusDetailsModules item={singleService[0]} />
      <Footer />
    </main>
  );
}
