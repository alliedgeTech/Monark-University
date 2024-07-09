import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const RegisterModules = dynamic(() => import('@/modules/Register'), {
  loading: () => <Preloader />,
});

export default function Inquiry() {
	return (
		<main>
			<HeaderTwo />

			<RegisterModules />

			<Footer />
		</main>
	)
}
