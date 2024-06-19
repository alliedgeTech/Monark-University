import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import BlogArea from "@/components/Studentclubdisplay"
import Campusdisplay2 from "@/components/campusdisplay2"
import Studentclub from "@/components/Studentclubdisplay"


export default function CampusModules() {
	
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				
			/>

			{/* <Campusdisplay2/> */}
			<Studentclub/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
