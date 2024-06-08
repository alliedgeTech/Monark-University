
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ResultModules = dynamic(() => import('@/modules/Result'), {
  loading: () => <Preloader />,
});

export default function Exams() {
	return (
		<main>
			<HeaderTwo />

			<ResultModules/>

			<Footer />
		</main>
	)
}
