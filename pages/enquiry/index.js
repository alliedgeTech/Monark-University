import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const EnquiryModules = dynamic(() => import("@/modules/Inquiry"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Enquiry - Monark University</title>
        <meta
          name="description"
          content="Submit your inquiry to Monark University using our dedicated form. Provide details such as your name, email, phone number, state, city, graduation information, preferred programs, and specializations to receive tailored assistance and information."
        />
		<meta
          name="keywords"
          content="Monark University enquiry form, Monark University inquiries, Monark University application form, submit enquiry Monark University, contact Monark University, Monark University programs information, Monark University specialization details"
        />
      </Head>
      <Header />
	  <EnquiryModules />
	  <Footer />
    </main>
  );
}
