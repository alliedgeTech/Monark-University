
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CircularModules = dynamic(() => import('@/modules/Circular'), {
  loading: () => <Preloader />,
});

export default function Circular() {
	return (
		<main>
			<Header />

			<CircularModules/>

			<Footer />
		</main>
	)
}
