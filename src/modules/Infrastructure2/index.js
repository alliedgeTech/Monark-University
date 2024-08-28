import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Infrastructuredisplay from "@/components/Infrastructuredisplay2"

export default function BlogTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Infrastructure"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724839673/infra_f87pa2.jpg"
				
			/>
			<Infrastructuredisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
