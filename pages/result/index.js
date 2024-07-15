
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ResultModules = dynamic(() => import('@/modules/Result'), {
  loading: () => <Preloader />,
});

export default function Exams() {
	return (
		<main>
			<Header />

			<ResultModules/>

			<Footer />
		</main>
	)
}
