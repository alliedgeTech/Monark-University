import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceModules = dynamic(() => import('@/modules/research'), {
  loading: () => <Preloader />,
});

export default function Service() {
	return (
		<main>
			<HeaderTwo/>
			<ServiceModules />

			<Footer />
		</main>
	)
}
