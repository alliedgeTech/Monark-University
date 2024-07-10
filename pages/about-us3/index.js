import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutUs3Modules = dynamic(() => import('@/modules/AboutUs3'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderTwo/>

			<AboutUs3Modules/>

			<Footer />
		</main>
	)
}
