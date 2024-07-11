import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const RegisterModules = dynamic(() => import('@/modules/Register'), {
  loading: () => <Preloader />,
});

export default function Inquiry() {
	return (
		<main>
			<Header />

			<RegisterModules />

			<Footer />
		</main>
	)
}
