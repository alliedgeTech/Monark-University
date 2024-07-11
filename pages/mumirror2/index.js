import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const Mumirror2Modules = dynamic(() => import('@/modules/Mumirror2'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<Header />

			<Mumirror2Modules />

			<Footer />
		</main>
	)
}
