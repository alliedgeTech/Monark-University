import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Circulardisplay from "@/components/Circulardisplay"

export default function Circularmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Circular"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724836065/circuler_enbukc.jpg"
				
			/>
			<Circulardisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}