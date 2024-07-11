
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SignInModules = dynamic(() => import('@/modules/Signin'), {
  loading: () => <Preloader />,
});

export default function SignIn() {
	return (
		<main>
			<Header />

			<SignInModules />

			<Footer />
		</main>
	)
}
