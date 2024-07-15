import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceThreeModules = dynamic(() => import('@/modules/ServiceThree'), {
  loading: () => <Preloader />,
});

export default function ServiceThree() {
	return (
		<main>
			<Header />

			<ServiceThreeModules />

			<Footer />
		</main>
	)
}
