import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import syllabusdata from "@/data/syllabus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

const Syllabusdetails = dynamic(() => import("@/modules/showSyllabu"), {
  loading: () => <Preloader />,
});

const SyllabusDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Syllabusdetails - Monark University</title>
        <meta
          name="description"
          content="Access comprehensive details about the syllabus for each course offered at Monark University. Explore in-depth information on course content, learning objectives, and academic requirements for a wide range of programs."
        />
        <meta
          name="keywords"
          content="Monark University syllabus, course syllabus Monark University, syllabus details Monark University, academic syllabus Monark University, program syllabus Monark University"
        />
      </Head>
      <Header />
      <Syllabusdetails id={id} />
      <Footer />
    </div>
  );
};

export default SyllabusDetailsPage;
