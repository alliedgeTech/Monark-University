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
		<div className='hero-img container' style={{marginTop:'140px'}}>
			<img className='img-fluid' src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb"/>
		</div>
	)
}
