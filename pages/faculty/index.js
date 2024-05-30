import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const FacultyModules = dynamic(() => import('@/modules/Faculty'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderTwo />

			<FacultyModules />

			<Footer />
		</main>
	)
}
