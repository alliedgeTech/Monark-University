import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Infrastructuredisplay from "@/components/Infrastructuredisplay"

export default function BlogTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Infrastructure"
				
			/>
			<Infrastructuredisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
