import BreadCrumbs from "@/components/BreadCrumbs"

import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import RegisterForm from "@/components/RegisterForm"

export default function InquiryModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Register Now"
				subTitle="Career"
			/>
			<RegisterForm />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
