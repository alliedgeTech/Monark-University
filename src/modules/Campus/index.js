
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"

import Campusdisplay from "../../components/Campusdisplay"
import BlogArea from "@/components/Studentclubdisplay"


export default function CampusModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				
			/>
			<Campusdisplay/>
			<BlogArea/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
