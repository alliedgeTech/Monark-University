import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const PlacementModules = dynamic(() => import("@/modules/Placement"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Placement - Monark University</title>
        <meta
          name="description"
          content="Visit the Placement Drive page at Monark University to access detailed information about our Training and Placement Cell. Read a message from Prof. Nilesh J. Parekh, stay informed about upcoming placement drives, review our placement records, and explore the companies associated with Monark University. Check out success stories of our placement alumni and view photos from past placement drives."
        />
		<meta
          name="keywords"
          content="Monark University Placement Drive, Training and Placement Cell Monark University, Prof. Nilesh J. Parekh message, Monark University placement news, upcoming placement drives, Monark University placement records, placement companies Monark University, placement alumni Monark University, past placement drive photos"
        />
      </Head>
      <Header />

      <PlacementModules />

      <Footer />
    </main>
  );
}
