import About from "./About3";
import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="About MU"  Img= "/img/brand/brandimg3.jpg"/>
      <About />
      <ScrollTop />
    </main>
  );
}
