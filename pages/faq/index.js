
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const FaqModules = dynamic(() => import('@/modules/Faq'), {
  loading: () => <Preloader />,
});

export default function Faq() {
	return (
		<main>
			<Header />

			<FaqModules />

			<Footer />
		</main>
	)
}
