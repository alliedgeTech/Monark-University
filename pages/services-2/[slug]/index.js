import { useRouter } from 'next/router';
import after12 from "@/data/after12"

import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceDetailsModules = dynamic(() => import('@/modules/After12'), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
	const router = useRouter();
	const { asPath } = router;
	const serviceSlug = asPath.split('/')[2];

	const singleService = after12.filter((service) => {
        return service.slug === serviceSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<ServiceDetailsModules item={singleService[0]} />

			<Footer />
		</main>
	)
}
