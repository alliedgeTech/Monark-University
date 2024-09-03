import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";

const Newsmodules = dynamic(() => import("@/modules/Newsdetail"), {
  loading: () => <Preloader />,
});

export default function Newsdetails() {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <main>
      <Head>
        <title>Placement News - Monark University</title>
        <meta
          name="description"
          content="Explore the Placement page at Monark University to find detailed news and updates about placement opportunities for our students. Stay informed about upcoming job fairs, recruitment drives, and career development resources that support your future career success."
        />
		<meta
          name="keywords"
          content="Monark University placement, placement opportunities Monark University, Monark University job fairs, Monark University recruitment drives, student placements Monark University, career development Monark University, Monark University career resources"
        />
      </Head>
      <Header />

      <Newsmodules _id={_id} />

      <Footer />
    </main>
  );
}
