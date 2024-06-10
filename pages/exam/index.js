
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ExamModules = dynamic(() => import('@/modules/Exam'), {
  loading: () => <Preloader />,
});

export default function Exam() {
	return (
		<main>
			<HeaderTwo />

			<ExamModules/>

			<Footer />
		</main>
	)
}
