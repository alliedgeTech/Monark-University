import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const StudentRegistrationTwoModules = dynamic(() => import('@/modules/StudentRegistrationTwo'), {
  loading: () => <Preloader />,
});

export default function StudentRegistrationTwo() {
	return (
		<main>
			<Header />

			<StudentRegistrationTwoModules />

			<Footer />
		</main>
	)
}
