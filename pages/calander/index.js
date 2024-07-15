
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CalanderModules = dynamic(() => import('@/modules/Calander'), {
  loading: () => <Preloader />,
});

export default function Calander() {
	return (
		<main>
			<Header />

			<CalanderModules/>

			<Footer />
		</main>
	)
}
