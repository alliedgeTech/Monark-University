import About from "./About";
import BreadCrumbs from "@/components/BreadCrumbs";

import Team from "./Team";

import ScrollTop from "@/components/ScrollTop";

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="About MU"   />

      <About />

      <Team />

      <ScrollTop />
    </main>
  );
}
