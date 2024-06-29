import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutUs2Modules = dynamic(() => import('@/modules/AboutUs2'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderTwo/>

			<AboutUs2Modules/>

			<Footer />
		</main>
	)
}
