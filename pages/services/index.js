import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";

const ServiceModules = dynamic(() => import("@/modules/Service"), {
  loading: () => <Preloader />,
});

export default function Service() {
  return (
    <main>
      <Header />
      <ServiceModules />
      <Footer />
    </main>
  );
}
