import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceDetailsArea from "./ServiceDetailsArea2"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceDetailsModules(singleService) {
	console.log(singleService	)
	return (
		<main>
			<BreadCrumbs
				Title="After 12 Details"
				subTitle="Service-2"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
