import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CareerModules = dynamic(() => import('@/modules/Careerdetails'), {
  loading: () => <Preloader />,
});

export default function Career() {
	return (
		<main>
			<HeaderTwo />

			<CareerModules />

			<Footer />
		</main>
	)
}
