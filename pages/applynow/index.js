import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const ApplyModules = dynamic(() => import("@/modules/Apply"), {
  loading: () => <Preloader />,
});

export default function Applyhere() {
  return (
    <main>
      <Head>
        <title>Apply Now - Monark University</title>
        <meta
          name="description"
          content="Apply now to Monark University by filling out our easy online application form. Provide your name, email, phone number, state, city, gender, qualification, and the course you're interested in. Start your journey towards academic excellence today!"
        />
		<meta
          name="keywords"
          content="Apply now Monark University, Monark University application form, Monark University admission, Monark University online application, name email phone application, course interest Monark University, Monark University enrollment"
        />
     </Head>
      <Header />
	  <ApplyModules />
	  <Footer />
    </main>
  );
}
