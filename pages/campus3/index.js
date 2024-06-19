import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CampusModules = dynamic(() => import('@/modules/Campus3'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderTwo />

			<CampusModules/>

			<Footer />
		</main>
	)
}
