
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AcademiccModules = dynamic(() => import('@/modules/Academiccalander'), {
  loading: () => <Preloader />,
});

export default function Academicc() {
	return (
		<main>
			<HeaderTwo />

			<AcademiccModules/>

			<Footer />
		</main>
	)
}
