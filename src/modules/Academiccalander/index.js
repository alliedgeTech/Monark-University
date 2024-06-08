import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Calanderdisplay from "@/components/Calanderdisplay"

export default function Academiccmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Academic Calander"
				
			/>
			<Calanderdisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}