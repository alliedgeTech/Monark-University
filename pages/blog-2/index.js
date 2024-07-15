import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BlogTwoModules = dynamic(() => import('@/modules/BlogTwo'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<Header />

			<BlogTwoModules />

			<Footer />
		</main>
	)
}
