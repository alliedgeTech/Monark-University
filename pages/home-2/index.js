import Header from '@/components/Header';
import FooterTwo from '@/components/Footer/FooterTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const HomeTwoModules = dynamic(() => import('@/modules/HomeTwo'), {
  loading: () => <Preloader />,
});

export default function HomeTwo() {
	return (
		<main>
			<Header />

			<HomeTwoModules />

			<FooterTwo />
		</main>
	)
}
