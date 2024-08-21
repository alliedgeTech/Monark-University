import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutUs4Modules = dynamic(() => import('@/modules/AboutUs4'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<Header/>

			<AboutUs4Modules/>

			<Footer />
		</main>
	)
}
