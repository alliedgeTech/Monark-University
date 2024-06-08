import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Resultdisplay from "@/components/Resultdisplay"

export default function Resultmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Results"
				
			/>
			<Resultdisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}