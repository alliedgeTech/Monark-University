import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const StudentRegistrationModules = dynamic(() => import('@/modules/StudentRegistration'), {
  loading: () => <Preloader />,
});

export default function StudentRegistration() {
	return (
		<main>
			<Header />

			<StudentRegistrationModules />

			<Footer />
		</main>
	)
}
