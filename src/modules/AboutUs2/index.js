import About from "./About2";
import BreadCrumbs from "@/components/BreadCrumbs";


import ScrollTop from "@/components/ScrollTop";

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="About MU" Img= "/img/brand/brandimg2.jpg" />

      <About />

   
      <ScrollTop />
    </main>
  );
}
