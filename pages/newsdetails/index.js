
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
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
			<HeaderTwo />

			<Newsmodules _id={_id}/>

			<Footer />
		</main>
	)
}
