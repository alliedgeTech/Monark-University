import { Providers } from '@/redux/providers';

import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import '@/assets/css/nice-select.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome-pro.css'
import '@/assets/css/flaticon_xoft.css'
import '@/assets/css/flaticon_mycollection.css'
import '@/assets/scss/main.scss'
import '@/assets/css/spacing.css'
import '@/assets/css/meanmenu.css'
import 'animate.css';

function App({ Component, pageProps }) {
    return (
		<>
			<Providers>
				<Component {...pageProps} />  
			</Providers>
		</>
    );
}

export default App;
