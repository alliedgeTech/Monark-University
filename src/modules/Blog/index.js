import BlogArea from "./BlogArea"
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"
import Index from "../../components/Campusdisplay"


export default function BlogModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog"
				subTitle="Blog"
			/>
			<Index/>
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
