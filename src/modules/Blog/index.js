import BlogArea from "./BlogArea"
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import Campusdisplay from "@/components/campusdisplay"




export default function BlogModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog"
				subTitle="Blog"
			/>
			<Campusdisplay/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
