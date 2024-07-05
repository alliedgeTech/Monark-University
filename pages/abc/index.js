import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AbcModules = dynamic(() => import('@/modules/Abc'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderTwo/>

			<AbcModules/>

			<Footer />
		</main>
	)
}