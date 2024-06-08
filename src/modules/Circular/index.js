import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Circulardisplay from "@/components/Circulardisplay"

export default function Circularmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Circular"
				
			/>
			<Circulardisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}