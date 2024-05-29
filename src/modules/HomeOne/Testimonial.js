import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image"
import SingleTestimonial from "@/components/Testimonial";
import Testimonials from "@/data/testimonials"

const Testimonial = () => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);

	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

	const sliderSettings = {
		asNavFor: nav2,
		ref: slider1,
		dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
	};

	const sliderNavSettings = {
		asNavFor: nav1,
		ref: slider2,
		slidesToShow: 3,
        slidesToScroll: 1,
		swipeToSlide: true,
        margin: 10,
		vertical:true,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0',
		verticalSwiping: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					vertical:false,
					centerMode: false
				}
			},
		]
	};

	return (
		<></>
	)
}

export default Testimonial
