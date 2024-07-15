import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import Studentclub from "@/components/Studentclubdisplay"


export default function CampusModules() {
	
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				
			/>

			<Studentclub/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
