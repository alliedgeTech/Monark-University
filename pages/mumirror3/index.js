import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const Mumirror3Modules = dynamic(() => import('@/modules/Mumirror3'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderTwo />

			<Mumirror3Modules />

			<Footer />
		</main>
	)
}
