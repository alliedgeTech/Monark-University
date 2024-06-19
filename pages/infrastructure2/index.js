
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InfrastructureModules = dynamic(() => import('@/modules/Infrastructure2'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderTwo />

			<InfrastructureModules/>

			<Footer />
		</main>
	)
}
