import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const NpeModules = dynamic(() => import('@/modules/Npe'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<Header/>

			<NpeModules/>

			<Footer />
		</main>
	)
}
