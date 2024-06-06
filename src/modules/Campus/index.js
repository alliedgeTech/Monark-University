
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import BlogArea from "@/components/Studentclubdisplay"
import Campusdisplay from "@/components/campusdisplay"
import Studentclub from "@/components/Studentclubdisplay"


export default function CampusModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				
			/>

			<Campusdisplay/>
			<Studentclub/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
