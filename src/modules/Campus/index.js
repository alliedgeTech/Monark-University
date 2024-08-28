import Newsletter from "@/components/Newsletter";
import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";

import Campusdisplay from "@/components/Campusdisplay";


export default function CampusModules() {
  return (
    <main>
      <BreadCrumbs Title="Campus Life"
      Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724839477/campuslife_xmpznp.jpg " />

      <Campusdisplay />
      
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
