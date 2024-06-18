import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const MumirrorModules = dynamic(() => import('@/modules/Mumirror'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderTwo />

			<MumirrorModules />

			<Footer />
		</main>
	)
}
