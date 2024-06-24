import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import ApplyForm from "@/components/Applydisplay"

export default function ApplyModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Apply Now"
				subTitle="Career"
			/>
			<ApplyForm />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
