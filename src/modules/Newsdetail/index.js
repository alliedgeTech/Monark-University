import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Newsdetail from "@/components/Newsdetails"

export default function Newsmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="News Details"
				
			/>
			<Newsdetail />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}