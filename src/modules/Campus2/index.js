import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import Campusdisplay2 from "@/components/campusdisplay2"


export default function CampusModules() {
	
	return (
		<main>
			<BreadCrumbs
				Title="Campus Life"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724839477/campuslife_xmpznp.jpg "/>
			<Campusdisplay2/>
			<ScrollTop />
		</main>
	)
}
