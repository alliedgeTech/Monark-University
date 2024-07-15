import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const PlacementModules = dynamic(() => import('@/modules/Placement'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<PlacementModules />

			<Footer />
		</main>
	)
}
