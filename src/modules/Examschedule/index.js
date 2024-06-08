import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Examsdisplay from "@/components/Examdisplay"

export default function Examsmodules() {
	return (
		<main>
			<BreadCrumbs
				Title="Exam Schedule"
				
			/>
			<Examsdisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}