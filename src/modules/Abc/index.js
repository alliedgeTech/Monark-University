import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";
import ActionButton from "@/components/Actionbutton";
import Abc from "@/components/Abc"

export default function AboutUsModules() {
  return (
    <main>
      {/* <BreadCrumbs Title="Abc" /> */}
        <Abc/>
      <ActionButton />
      <ScrollTop />
    </main>
  );
}
