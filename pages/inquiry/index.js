import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InquiryModules = dynamic(() => import('@/modules/Inquiry'), {
  loading: () => <Preloader />,
});

export default function Inquiry() {
	return (
		<main>
			<Header />

			<InquiryModules />

			<Footer />
		</main>
	)
}
