import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";
import ActionButton from "@/components/Actionbutton";
import Npe from "@/components/Npe"

export default function AboutUsModules() {
  return (
    <main>
      <BreadCrumbs Title="NPE 2020" />
        <Npe/>
      <ScrollTop />
    </main>
  );
}
