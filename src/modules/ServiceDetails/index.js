import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceDetailsArea from "./ServiceDetailsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceDetailsModules(singleService) {
	console.log(singleService)
	return (
		<main>
			<BreadCrumbs
				Title="After 10 Details"
				subTitle="Service"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
