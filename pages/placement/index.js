import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const PlacementModules = dynamic(() => import('@/modules/Placement'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderTwo />

			<PlacementModules />

			<Footer />
		</main>
	)
}
