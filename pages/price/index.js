
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const PriceModules = dynamic(() => import('@/modules/Price'), {
  loading: () => <Preloader />,
});

export default function Price() {
	return (
		<main>
			<Header />

			<PriceModules />

			<Footer />
		</main>
	)
}
