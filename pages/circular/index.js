
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CircularModules = dynamic(() => import('@/modules/Circular'), {
  loading: () => <Preloader />,
});

export default function Circular() {
	return (
		<main>
			<HeaderTwo />

			<CircularModules/>

			<Footer />
		</main>
	)
}
