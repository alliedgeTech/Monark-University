
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SyllabusModules = dynamic(() => import('@/modules/Syllabus'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderTwo />

			<SyllabusModules/>

			<Footer />
		</main>
	)
}
