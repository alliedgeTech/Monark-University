import Newsletter from "@/components/Newsletter";
import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";
import BlogArea from "@/components/Studentclubdisplay";
// import Campusdisplay from "@/components/MediaCoverage";
import Campusdisplay from "@/components/Campusdisplay";
import Studentclub from "@/components/Studentclubdisplay";

export default function CampusModules() {
  return (
    <main>
      <BreadCrumbs Title="Campus Life"
      Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724839477/campuslife_xmpznp.jpg " />

      <Campusdisplay />
      {/* <Studentclub/> */}
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
