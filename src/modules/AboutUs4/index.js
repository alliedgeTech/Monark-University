import BreadCrumbs from "@/components/BreadCrumbs";


import ScrollTop from "@/components/ScrollTop";
import Visionmision from "@/components/Visionmision";

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="About MU" Img= "/img/brand/brandimg4.jpg" />

      <div id="visionandmission" className="mt-5">
        <Visionmision />
        </div>

   
      <ScrollTop />
    </main>
  );
}
