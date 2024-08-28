import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Newsdetail from "@/components/Newsdetails"

export default function Newsmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Placement News"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724838788/placement_fwuxod.jpg"
			/>
			<Newsdetail />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}