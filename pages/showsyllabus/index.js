import React from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import syllabusdata from "@/data/syllabus";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';

import "bootstrap/dist/css/bootstrap.min.css";

const Syllabusdetails = dynamic(() => import ('@/modules/showSyllabu'), {
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
      <Header />
      <Syllabusdetails id={id} />
      <Footer />
    </div>
  );
};

export default SyllabusDetailsPage;