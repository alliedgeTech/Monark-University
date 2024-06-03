import { useRouter } from 'next/router';
import syllabus from "@/data/syllabus"

import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SyllabusDetailsModules = dynamic(() => import('@/modules/Syllabus'), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
	const router = useRouter();
	const { asPath } = router;
	const serviceSlug = asPath.split('/')[2];

	const singleService = syllabus.filter((service) => {
        return service.slug === serviceSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<SyllabusDetailsModules item={singleService[0]} />

			<Footer />
		</main>
	)
}
