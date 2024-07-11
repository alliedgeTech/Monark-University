import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const Mumirror3Modules = dynamic(() => import('@/modules/Mumirror3'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<Mumirror3Modules />

			<Footer />
		</main>
	)
}
