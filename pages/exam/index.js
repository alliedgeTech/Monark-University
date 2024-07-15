
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ExamModules = dynamic(() => import('@/modules/Exam'), {
  loading: () => <Preloader />,
});

export default function Exam() {
	return (
		<main>
			<Header />

			<ExamModules/>

			<Footer />
		</main>
	)
}
