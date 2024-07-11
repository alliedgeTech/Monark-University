import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ContactModules = dynamic(() => import('@/modules/Contact'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<ContactModules />

			<Footer />
		</main>
	)
}
