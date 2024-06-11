
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CalanderModules = dynamic(() => import('@/modules/Calander'), {
  loading: () => <Preloader />,
});

export default function Calander() {
	return (
		<main>
			<HeaderTwo />

			<CalanderModules/>

			<Footer />
		</main>
	)
}
