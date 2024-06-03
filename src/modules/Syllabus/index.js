import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Syllabusdetails from "@/components/Syllabusdetails"

export default function Syllabusmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Syllabus"
				
			/>
			<Syllabusdetails />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}