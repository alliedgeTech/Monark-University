import Footer from "@/components/Footer";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MediaCoverageImage from "@/components/MediaCoverage";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";

const MediaCoverageModules = dynamic(() => import("@/modules/MediaCoverage"), {
  loading: () => <Preloader />,
});

export default function MediaCoveragePage() {
  return (
    <main>
      <HeaderTwo />
      <MediaCoverageImage />
      <Footer />
    </main>
  );
}
