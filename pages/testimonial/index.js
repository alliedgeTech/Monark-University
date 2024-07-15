import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic';
 
const TestimonialModules = dynamic(() => import('@/modules/Testimonial'), {
  loading: () => <Preloader />,
});

export default function Testimonial() {
	return (
		<main>
			<Header />

			<TestimonialModules />

			<Footer />
		</main>
	)
}
