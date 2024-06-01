import { useState } from 'react'
import Image from "next/image"
import CountUp from "react-countup";
import ModalVideo from 'react-modal-video'
import Link from 'next/link';
import heroimg from '../../../public/img/hero/universityimg.jpg';

export default function Banner() {
    const [state, setState] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

	return (
		<div className='hero-section'>
			<div className="hero-img">
				<img className='img-fluid' src="/img/hero/universityimg.jpg" />
				<div className="hero-text">
					<h1 className='hero-text-animation' data-text="MONARK UNIVERSITY">MONARK UNIVERSITY</h1>
					<p>We continue to be recognized as a leading global management institution, expanding the frontiers of management research, leadership, and education.</p>
				</div>
			</div>
		</div>
	)
}
