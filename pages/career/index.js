import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CareerModules = dynamic(() => import('@/modules/Careerdetails'), {
  loading: () => <Preloader />,
});

export default function Career() {
	return (
		<main>
			<Header />

			<CareerModules />

			<Footer />
		</main>
	)
}
