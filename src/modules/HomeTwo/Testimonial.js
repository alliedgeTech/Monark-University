import Image from "next/image"
import Slider from "react-slick"
import SingleTestimonialTwo from "@/components/Testimonial/Two";
import Testimonials from "@/data/testimonials"

export default function Testimonial() {
	const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        margin: 30,
        slidesToShow: 2,
        slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
    };

	return (
		<></>
	)
}
