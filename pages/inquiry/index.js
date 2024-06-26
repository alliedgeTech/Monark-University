import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InquiryModules = dynamic(() => import('@/modules/Inquiry'), {
  loading: () => <Preloader />,
});

export default function Inquiry() {
	return (
		<main>
			<HeaderTwo />

			<InquiryModules />

			<Footer />
		</main>
	)
}
