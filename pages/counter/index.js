import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CounterModules = dynamic(() => import('@/modules/Faculty'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<CounterModules />

			<Footer />
		</main>
	)
}
