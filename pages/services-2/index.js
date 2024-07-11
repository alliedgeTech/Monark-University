import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceTwoModules = dynamic(() => import('@/modules/ServiceTwo'), {
  loading: () => <Preloader />,
});

export default function ServiceTwo() {
	return (
		<main>
			<Header />

			<ServiceTwoModules />

			<Footer />
		</main>
	)
}
