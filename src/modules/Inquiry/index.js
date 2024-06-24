import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import InquiryForm from "@/components/Inquirydisplay"

export default function InquiryModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Inquiry"
				subTitle="Career"
			/>
			<InquiryForm />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
