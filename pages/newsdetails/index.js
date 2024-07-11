
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
 
const Newsmodules = dynamic(() => import('@/modules/Newsdetail'), {
  loading: () => <Preloader />,
});

export default function Newsdetails() {
	const router = useRouter();
	const { _id } = router.query;
	return (
		<main>
			<Header />

			<Newsmodules _id={_id}/>

			<Footer />
		</main>
	)
}
