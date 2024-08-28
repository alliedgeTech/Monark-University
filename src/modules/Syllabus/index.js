import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Syllabusdetails from "@/components/Syllabusdetails"

export default function Syllabusmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Syllabus"
				Img= "https://res.cloudinary.com/dnjgopun8/image/upload/v1724836144/syllabus_emeyrr.webp"
			/>
			<Syllabusdetails />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}