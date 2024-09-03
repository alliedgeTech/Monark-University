import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";
const RegisterModules = dynamic(() => import("@/modules/Register"), {
  loading: () => <Preloader />,
});

export default function Inquiry() {
  return (
    <main>
      <Head>
        <title>Result - Monark University</title>
        <meta
          name="description"
          content="Access your academic results easily with Monark University's Result Portal. Students can log in to view their grades, academic performance, and progress through a secure online portal. Stay updated on your academic achievements and track your success at Monark University."
        />
        <meta
          name="keywords"
          content="Monark University Result Portal, student results Monark University, view academic results Monark University, Monark University grades portal, student performance tracking, Monark University academic results, secure online result access"
        />
      </Head>
      <Header />
      <RegisterModules />
      <Footer />
    </main>
  );
}
