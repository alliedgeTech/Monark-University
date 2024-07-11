
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InfrastructureModules = dynamic(() => import('@/modules/Infrastructure'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<Header />

			<InfrastructureModules/>

			<Footer />
		</main>
	)
}
