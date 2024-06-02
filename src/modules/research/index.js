import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceDetailsArea from "./ServiceDetailsArea2"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceDetailsModules(singleService) {
	console.log(singleService	)
	return (
		<main>
			<BreadCrumbs
				Title="Research(phd)"
				subTitle="Service-4"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
