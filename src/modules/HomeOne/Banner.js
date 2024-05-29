import { useState } from 'react'
import Image from "next/image"
import CountUp from "react-countup";
import ModalVideo from 'react-modal-video'
import Link from 'next/link';

export default function Banner() {
    const [state, setState] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

	return (
		<div>
			<iframe className='img-fluid' style={{position:'relative',marginTop:'150px'}}
      src="https://www.youtube-nocookie.com/embed/iuRH_S98jnE?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0&origin=https://monarkuni.ac.in;&controls=0&playsinline=1"
      frameborder="0"
      allowfullscreen
    />
			
		</div>
	)
}
