import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ApplyModules = dynamic(() => import('@/modules/Apply'), {
  loading: () => <Preloader />,
});

export default function Applyhere() {
	return (
		<main>
			<Header />

			<ApplyModules />

			<Footer />
		</main>
	)
}
