import { useState } from 'react';
import Image from "next/image";
import CountUp from "react-countup";
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import heroimg from '../../../public/img/hero/universityimg.jpg';
import { gsap } from 'gsap';
import { useEffect } from "react";

export default function Banner() {

	useEffect(() => {
		let tl = gsap.timeline();
		tl.from('.hero-text', {
			y: '-100',
			scale: 1.5,
			opacity: 0,
			delay: "1",
		});
	}, []);

	const [state, setState] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(!isOpen);

	return (
		<div className='hero-section'>
			<div className="hero-img">
				<video className='w-100 img-fluid' muted loop autoPlay playsInline controls
					src="https://res.cloudinary.com/dnjgopun8/video/upload/v1718686490/videoplayback_2_pwabqu.mp4" />
				<div className="hero-text ">
					<h1 className='text-white' data-text="MONARK UNIVERSITY">MONARK UNIVERSITY</h1>
					<p className='text-center text-white d-none d-lg-block'>We remain steadfastly acknowledged as a preeminent global management institution, continually pushing the boundaries of management research, leadership, and education.</p>
				</div>
			</div>
		</div>
	);
}
