import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Examdisplay from "@/components/Examdisplay"

export default function ExamModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Exam Schedule"
				
			/>
			<Examdisplay />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}