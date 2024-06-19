import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollTop = (props) => {
	const { scrollClassName } = props;
	
  	const [isVisible, setIsVisible] = useState(false);
	const [isActive, setActive] = useState(false);

  	// Top: 0 takes us all the way back to the top of the page
  	// Behavior: smooth keeps it smooth!
  	const scrollToTop = () => {
		setActive(!isActive);
		
  	};

  	useEffect(() => {
    	// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

  	return (
		<>
			{isVisible && (
				<button className={`${scrollClassName ? scrollClassName : 'scroll-top scroll-to-target'} ${isVisible ? 'open' : ''}`} onClick={scrollToTop}>
					<i className="far fa-angle-double-up"></i>
				</button>
			)}
			<div className={`toggle-dark ${isActive ? 'active' : ''}`}>
				<div className="darks-btns">
					<div className="footer-btn darks">
					<button><i class="fa-solid fa-sun"></i></button>

					</div>
					<button><Link href="mumirror">Mu Mirror</Link></button>
				</div>
			</div>
		</>
  	);
}

export default ScrollTop;