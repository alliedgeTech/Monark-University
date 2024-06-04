import Image from "next/image"
import Link from "next/link"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";


export default function About() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let mm=gsap.matchMedia()
    
        mm.add("(min-width:991px)",()=>{
          gsap.from(".student-placement-heading h1", {
            opacity:0,
            scale:0.5,
            y:100,
            scrollTrigger: {
              trigger: ".student-placement-heading h1",
              scroller:'body',
              start: "top bottom",
              end: "top 70%",
              scrub: 0.2,
            },
          });
      
          
        })
    
    
      }, []);


	return (
		<div className="student-placement py-4 container-fluid">
			<div className="student-placement-heading d-flex align-items-center justify-content-center">
				<div className="line"></div>
				<h1 className="text-center mb-0 w-100">Student Placement</h1>
				<div className="line"></div>
			</div>
			<div className="marquee">
                <marquee behavior="alternate" direction="">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/3.Toyoto.png" alt="" />
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="" />
                    <img className="img-fluid" src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/snlfinanciallogo-300x53.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/smc.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/prakshal-300x81.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/practo_logo.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/nj-300x83.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/microlink-solution-pvt-ltd-11318313387.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/mazda1.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/fp.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/essae-teraoka-ltd-350x120-1.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/EPOCH.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/ECLINICAL.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/bharti-axa-life-insurance-logo2.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/aricent.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/925608981-2813930-1_s.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/2.-BYJUS.png" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/4.-Maruti-Suzuki.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/5.-torrent-300x93.png" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/6.-Zydus-Cadila-300x225.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/9.-IBM-300x143.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/8.-VODAFONE-IMAGE.jpg" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/11.-Jindal-Steel-Power-300x107.png" alt="" />
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/18.-ICICI-2-300x188.jpg" alt="" />
                </marquee>
            </div> 
		</div>
	)
}
