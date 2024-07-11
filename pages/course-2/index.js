
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseTwoModules = dynamic(() => import('@/modules/CourseTwo'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<Header />

			<CourseTwoModules />

			<Footer />
		</main>
	)
}
