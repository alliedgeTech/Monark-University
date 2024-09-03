import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactModules = dynamic(() => import("@/modules/Contact"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Contact - Monark University</title>
        <meta
          name="description"
          content="Get in touch with Monark University through our contact page. Use the application form to send your details to our customer care team, who will assist you with inquiries and support to help you connect with us effectively."
        />
		<meta
          name="keywords"
          content="Monark University contact page, Monark University customer care, contact form Monark University, reach Monark University, Monark University support, Monark University inquiries"
        />
      </Head>
      <Header />
	  <ContactModules />
	  <Footer />
    </main>
  );
}
