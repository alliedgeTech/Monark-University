import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const SyllabusModules = dynamic(() => import("@/modules/Syllabus"), {
  loading: () => <Preloader />,
});

export default function Blog() {
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
      <SyllabusModules />
      <Footer />
    </main>
  );
}
