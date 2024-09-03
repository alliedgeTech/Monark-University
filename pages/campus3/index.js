import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const CampusModules = dynamic(() => import("@/modules/Campus3"), {
  loading: () => <Preloader />,
});

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Student Clubs- Monark University</title>
        <meta
          name="description"
          content="Explore the vibrant student life at Monark University through our diverse range of student-run organizations and clubs. From the Smile Please Event Organizing Club to the Green Club, Language Club, and many more, discover how our students actively contribute to campus life and personal development."
        />
		<meta
          name="keywords"
          content="Monark University student life, student clubs Monark University, Smile Please Event Organizing Club, Green Club Monark University, Language Club Monark University, Society of Personality Development, Sci-Gen Club Monark University, Avinya Club Monark University, Spiritual Club Monark University, Health Club Monark University, Hands on Help Physiotherapy Club, Multi-Activity Club Monark University, Discipline Club Monark University"
        />
      </Head>
      <Header />

      <CampusModules />

      <Footer />
    </main>
  );
}
