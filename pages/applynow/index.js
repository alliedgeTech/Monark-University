import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ApplyModules = dynamic(() => import('@/modules/Apply'), {
  loading: () => <Preloader />,
});

export default function Applyhere() {
	return (
		<main>
			<HeaderTwo />

			<ApplyModules />

			<Footer />
		</main>
	)
}
