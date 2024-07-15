import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const MumirrorModules = dynamic(() => import('@/modules/Mumirror'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<MumirrorModules />

			<Footer />
		</main>
	)
}
