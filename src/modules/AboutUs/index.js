import About from "./About";
import BreadCrumbs from "@/components/BreadCrumbs";

import Team from "./Team";
import Newsletter from "@/components/Newsletter";
import ScrollTop from "@/components/ScrollTop";
import ActionButton from "@/components/Actionbutton";

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="About MU" />

      <About />

      <Team />

      <Newsletter />
      <ActionButton />
      <ScrollTop />
    </main>
  );
}
