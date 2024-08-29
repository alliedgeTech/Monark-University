import { useRouter } from 'next/router';
import pgcourses from "@/data/pgcourses"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceDetailsModules = dynamic(() => import('@/modules/pgcourses'), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
	const router = useRouter();
	const { asPath } = router;
	const serviceSlug = asPath.split('/')[2];

	const singleService = pgcourses.filter((service) => {
        return service.slug === serviceSlug;
    });

	return (
		<main>
			<Header />

			<ServiceDetailsModules item={singleService[0]} />

			<Footer />
		</main>
	)
}
