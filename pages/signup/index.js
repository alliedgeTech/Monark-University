
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SignUpModules = dynamic(() => import('@/modules/Signup'), {
  loading: () => <Preloader />,
});

export default function SignUp() {
	return (
		<main>
			<Header />

			<SignUpModules />

			<Footer />
		</main>
	)
}
