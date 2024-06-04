import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Showsyllabusdetails from "@/components/Showsyllabusdetails"

export default function Syllabusmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Full Syllabus"
				
			/>
			<Showsyllabusdetails />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}