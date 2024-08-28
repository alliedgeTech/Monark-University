import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Calanderdisplay from "@/components/Calanderdisplay"

export default function CalanderModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Academic Calander"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724835788/calander_qhe5ln.jpg"
				
			/>
			<Calanderdisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}