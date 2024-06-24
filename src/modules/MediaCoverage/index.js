import Newsletter from "@/components/Newsletter";
import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";
import MediaCoverageImage from "@/components/MediaCoverage";

export default function MediaCoverageModules() {
  return (
    <main>
      <BreadCrumbs Title="Media & Coverage" />
      <MediaCoverageImage />
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
