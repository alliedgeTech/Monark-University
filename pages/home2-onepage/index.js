import Header from '@/components/Header';
import FooterTwo from '@/components/Footer/FooterTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const OnepageHomeTwoModules = dynamic(() => import('@/modules/OnepageHomeTwo'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeTwo() {
	return (
		<main>
			<Header menuFormat="onepage2" />

			<OnepageHomeTwoModules />

			<FooterTwo />
		</main>
	)
}
