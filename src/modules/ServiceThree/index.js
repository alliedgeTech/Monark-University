import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceThreeArea from "./ServiceArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceThreeModules() {
	return (
		<main>
			<BreadCrumbs
				Title="pgcourses"
				subTitle="Service-3"
			/>
			<ServiceThreeArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
