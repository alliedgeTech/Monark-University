import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutUs3Modules = dynamic(() => import('@/modules/AboutUs3'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<Header/>

			<AboutUs3Modules/>

			<Footer />
		</main>
	)
}
