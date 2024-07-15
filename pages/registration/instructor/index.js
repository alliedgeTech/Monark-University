import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InstructorRegistrationModules = dynamic(() => import('@/modules/InstructorRegistration'), {
  loading: () => <Preloader />,
});

export default function InstructorRegistration() {
	return (
		<main>
			<Header />

			<InstructorRegistrationModules />

			<Footer />
		</main>
	)
}
