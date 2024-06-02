
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import BlogArea from "@/components/Studentclubdisplay"
import Campusdisplay from "@/components/campusdisplay"


export default function CampusModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				
			/>

			<Campusdisplay/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
