import BreadCrumbs from "@/components/BreadCrumbs";
import ServiceDetailsArea from "./ServiceDetailsArea";
import Newsletter from "@/components/Newsletter";
import ScrollTop from "@/components/ScrollTop";

export default function ServiceDetailsModules(singleService, props) {
  console.log(singleService);
  const { Title } = props;
  console.log(props);
  return (
    <main>
      <BreadCrumbs
        Title={`After`}
        subTitle="Service"
      />
      <ServiceDetailsArea item={singleService.item} Title={Title} />
      <Newsletter />
      <ScrollTop />
    </main>
  );
}