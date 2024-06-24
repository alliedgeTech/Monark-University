import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import CareerForm from "@/components/Careerdetails"

export default function CareerModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Career"
				subTitle="Career"
			/>
			<CareerForm />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
