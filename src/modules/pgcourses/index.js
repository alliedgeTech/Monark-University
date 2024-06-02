import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceDetailsArea from "./ServiceDetailsArea3"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceDetailsModules(singleService) {
	console.log(singleService)
	return (
		<main>
			<BreadCrumbs
				Title="Pg courses"
				subTitle="Service-3"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}