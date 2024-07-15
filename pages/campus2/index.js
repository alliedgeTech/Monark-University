import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CampusModules = dynamic(() => import('@/modules/Campus2'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<Header />

			<CampusModules/>

			<Footer />
		</main>
	)
}
