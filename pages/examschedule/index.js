
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ExamsModules = dynamic(() => import('@/modules/Examschedule'), {
  loading: () => <Preloader />,
});

export default function Exams() {
	return (
		<main>
			<HeaderTwo />

			<ExamsModules/>

			<Footer />
		</main>
	)
}
