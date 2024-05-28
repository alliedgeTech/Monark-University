
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Image from "next/image"
import ProgressBar from "@ramonak/react-progress-bar";

export default function ValueArea() {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

	return (
		<div className="it-value-area pt-120 pb-120 p-relative fix">
			<ModalVideo channel='youtube' isOpen={isOpen} videoId='FdrNFEbcsRs' onClose={() => { openModal(); }} />	
			<div className="it-value-shape-1 d-none d-xxl-block">
				<Image src="/img/value/value-shape-3.jpg" width={176} height={168} alt="" />
			</div>
			<div className="it-value-shape-2 d-none d-xl-block">
				<Image src="/img/value/value-shape-4.jpg" width={778} height={392} alt="" />
			</div>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-6">
						<div className="it-value-title-box">
							<span className="it-section-subtitle-3">
								<Image src="/img/about/bg.svg" width={23} height={17} alt="" />
								Top Popular Course
							</span>
							<h4 className="it-section-title-3 pb-25">Our Classroom is a very
								deferent <span>school</span> than all <br /> the others</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore.</p>
						</div>
						<div className="it-progress-bar-wrap">
							<div className="it-progress-bar-item">
								<label>Case study success</label>
								<div className="it-progress-bar">
									<ProgressBar 
										completed={75} 
										className="progress-bar"
										baseBgColor="rgba(137, 186, 180, 0.3)"
										bgColor="#116E63"
										labelColor="#fff"
										height="10px"
										animateOnRender
										transitionTimingFunction="ease"
									/>
								</div>
							</div>
							<div className="it-progress-bar-item">
								<label>Happy student</label>
								<div className="it-progress-bar">
									<ProgressBar 
										completed={82} 
										className="progress-bar"
										baseBgColor="rgba(137, 186, 180, 0.3)"
										bgColor="#116E63"
										labelColor="#fff"
										height="10px"
										animateOnRender
										transitionTimingFunction="ease"
									/>
								</div>
							</div>
							<div className="it-progress-bar-item">
								<label>Engaging</label>
								<div className="it-progress-bar">
									<ProgressBar 
										completed={65} 
										className="progress-bar"
										baseBgColor="rgba(137, 186, 180, 0.3)"
										bgColor="#116E63"
										labelColor="#fff"
										height="10px"
										animateOnRender
										transitionTimingFunction="ease"
									/>
								</div>
							</div>
							<div className="it-progress-bar-item">
								<label>Student Community</label>
								<div className="it-progress-bar">
									<ProgressBar 
										completed={98} 
										className="progress-bar"
										baseBgColor="rgba(137, 186, 180, 0.3)"
										bgColor="#116E63"
										labelColor="#fff"
										height="10px"
										animateOnRender
										transitionTimingFunction="ease"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="it-value-right-wrap text-end p-relative">
							<div className="it-value-right-img p-relative">
								<Image src="/img/value/value-1.jpg" width={588} height={689} alt="" />
								<button className="it-value-play-btn" onClick={() => { openModal(); }}><i className="fa-sharp fa-solid fa-play"></i></button>
							</div>
							<div className="it-value-img-shape d-none d-xl-block">
								<Image src="/img/value/value-shape-2.jpg" width={219} height={730} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
