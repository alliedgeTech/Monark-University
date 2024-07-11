
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseModules = dynamic(() => import('@/modules/Course'), {
	
  loading: () => <Preloader />,
  
});

export default function Course(props) {
	
	return (
		<main>
			<Header />

			<CourseModules />

			<Footer />
		</main>
	)
}
