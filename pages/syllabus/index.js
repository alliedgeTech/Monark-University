
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SyllabusModules = dynamic(() => import('@/modules/Syllabus'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<Header />

			<SyllabusModules/>

			<Footer />
		</main>
	)
}
