import Image from "next/image"
import Link from "next/link";
import fullimg from "../../../public/img/choose/monarknew.jpg"
import blankm from	"../../../public/img/choose/NS.jpg"

export default function About() {

	return (
		<div>
			<div className="it-choose-area p-relative pt-180 pb-110">
				<div className="it-choose-shape-4 d-none d-md-block">
					<Image src="/img/choose/shape-1-4.png" width={85} height={24} alt="" />
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-6 mb-30">
							<div className="it-choose-left">
								<div className="it-choose-title-box mb-30">
									<span className="it-section-subtitle">Historical Background</span>
									<h4 className="it-section-title">Historical Background of the Sponsoring Body

									</h4>
								</div>
								<div className="it-choose-text pb-15">
									<p>With the blessings of the Goddess Saraswati, Shree Monark Education Trust (SMET) being the sponsoring/promoting body of the Monark University was established in the year 2001 as a result of the vision of its founder Chairman, Shri Mohanbharthi R. Goswami, a farmer and philanthropist, to promote world-class academic institutions. The following erstwhile institutions promoted by the Trust at fast pace have now come under the purview of the Monark University.</p>
								</div>
								<div className="it-choose-content-box">
									<div className="row gx-20">
										<div className="col-md-6 col-sm-6 mb-20">
											<div className="it-choose-content">
												<h5><i className="fa-solid fa-circle-check"></i>World Class Trainers</h5>
												<p>Experience excellence with our world-class faculty, dedicated to nurturing your academic journey with expertise and passion. </p>
											</div>
										</div>
										<div className="col-md-6 col-sm-6 mb-20">
											<div className="it-choose-content">
												<h5><i className="fa-solid fa-circle-check"></i>Easy Learning</h5>
												<p>Embark on a journey of effortless learning with our engaging approach and supportive faculty, making education a seamless and enjoyable experience. </p>
											</div>
										</div>
										<div className="col-md-6 col-sm-6 mb-20">
											<div className="it-choose-content">
												<h5><i className="fa-solid fa-circle-check"></i>Flexible</h5>
												<p>Experience easy, flexible learning with our adaptable approach and supportive faculty, empowering you to learn at your own pace and convenience.</p>
											</div>
										</div>
										<div className="col-md-6 col-sm-6 mb-20">
											<div className="it-choose-content">
												<h5><i className="fa-solid fa-circle-check"></i>Affordable Price</h5>
												<p>Unlock the door to easy, affordable learning with our accessible approach and budget-friendly options, ensuring education is within reach for all.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 mb-30">
							<div className="it-choose-thumb-box text-center text-md-end">
								<div className="it-choose-thumb p-relative">
									<Image src={fullimg} className="img-fluid" alt="" />
									<div className="it-choose-shape-1">
										<Image src="/img/choose/shape-1-1.png" width={357} height={306} alt="" />
									</div>
									<div className="it-choose-shape-2">
										<Image src="/img/choose/shape-1-2.png" width={357} height={303} alt="" />
									</div>
									<div className="it-choose-shape-3 d-none d-lg-block">
										<Image src="/img/choose/shape-1-3.png" width={277} height={271} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Years and trust start*/}
			<div>
				<div class="container">
					<div class="row">

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/sgu.jpg" />

											<div class="it-event-2-date">
												<span><i>2001</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Shree Monark education trust</h4>

										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/mmc.jpg" />

											<div class="it-event-2-date">
												<span><i>2005</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Smt. Maniba Mahila B.Ed. College</h4>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/hge.png" />

											<div class="it-event-2-date">
												<span><i>2007</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Hasmukh Goswami College of Engineering</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/sgu.jpg" />

											<div class="it-event-2-date">
												<span><i>2007</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Piyuni pre-school teacher education</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/jaa.jpg" />

											<div class="it-event-2-date">
												<span><i>2007</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Jeel adhyapan mandir</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">
											<a href="/event/event-one">
												<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/sgu.jpg" />
											</a>
											<div class="it-event-2-date">
												<span><i>2007</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Satish adhyapan mandir</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/mce.png" />

											<div class="it-event-2-date">
												<span><i>2008</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Maniba College of education</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/mmed.png" />

											<div class="it-event-2-date">
												<span><i>2008</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Manguba M.Ed College</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/rba.jpg" />

											<div class="it-event-2-date">
												<span><i>2011</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Rudra College of business administration</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/pgc.png" />

											<div class="it-event-2-date">
												<span><i>2011</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Piyuni Goswami College of commerce</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/jgs.png" />

											<div class="it-event-2-date">
												<span><i>2015</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Jeel Goswami College of Science and research</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/sgu.jpg" />

											<div class="it-event-2-date">
												<span><i>2015</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Satish Goswami College of Physiotherapist</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/ug.jpg" />

											<div class="it-event-2-date">
												<span><i>2018</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Urmila Goswami College of Nursing</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/mgl.jpg" />

											<div class="it-event-2-date">
												<span><i>2019</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Mohan Goswami College of law</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/pgu.jpeg" />

											<div class="it-event-2-date">
												<span><i>2019</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Piyuni Goswami College of arts</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/rdg.jpeg" />

											<div class="it-event-2-date">
												<span><i>2019</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Rudra Goswami College of computer application</h4>

										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-3 mb-30">
							<div class="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
								<div class="it-event-2-item-box">
									<div class="it-event-2-item">
										<div class="it-event-2-thumb fix">

											<img alt="" loading="lazy" width="352" height="256" decoding="async" data-nimg="1" src="/img/choose/monarkuni.jpeg" />

											<div class="it-event-2-date">
												<span><i>2021</i></span>
											</div>
										</div>
										<div class="it-event-2-content">
											<h4 class="it-event-2-title">Monark University</h4>

										</div>
									</div>
								</div>
							</div>
						</div>


					</div>



					{/* Years and trust end*/}


					{/* vision and mission start*/}

					<div>
						<div class="it-career-area it-career-bg p-relative pt-120">
							<div class="it-career-shape-2 d-none d-xl-block">
								<img alt="" loading="lazy" width="366" height="255" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-1.png&amp;w=750&amp;q=75" />
							</div>
							<div class="it-career-shape-3 d-none d-xl-block">
								<img alt="" loading="lazy" width="66" height="65" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-2.png&amp;w=256&amp;q=75" />
							</div>
							
							
							<div class="it-career-shape-6 d-none d-xl-block">
								<img alt="" loading="lazy" width="77" height="85" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-5.png&amp;w=256&amp;q=75" />
							</div>
							<div class="container">
								<div class="row">
									<div class="col-xl-12">
										<div class="it-career-title-box text-center mb-70">
											<span class="it-section-subtitle">Vision and Mission</span>
											<h4 class="it-section-title">Discover your gain <svg class="title-shape-2" width="168" height="65" viewBox="0 0 168 65" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332" stroke="#0AB99D" stroke-width="3" stroke-linecap="round"></path>
											</svg>
											</h4>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 mb-30">
										<div class="it-career-item p-relative fix">
											<div class="it-career-content">
												<span>Vision</span>
												<p>Monark University will be an inclusive<br/> and engaged research-intensive<br/> university that inspires creativity<br/> through outstanding achievements<br/> in learning, with up to date <br/> curriculum and contemporary<br/> delivery to meet the demands<br/> of the global higher education<br/> landscape.</p>
												
											</div>
											<div class="it-career-thumb">
												<img alt="" loading="lazy" width="309" height="252" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fthumb-1.png&amp;w=640&amp;q=75" />
											</div>
											<div class="it-career-shape-1">
												<img alt="" loading="lazy" width="642" height="350" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1.png&amp;w=1920&amp;q=75" />
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 mb-30">
										<div class="it-career-item p-relative fix">
											<div class="it-career-content">
												<span>Mission</span>
												<p>Monark University is committed to engaging <br/>  with the key issues of our natural <br/> and social worlds through outstanding <br/>  teaching, research, and scholarship.<br/>  Monark University will provide <br/>  a vibrant and supportive <br/>  intellectual environment that <br/>  attracts and connects people <br/> from all over the world.</p>
												
											</div>
											<div class="it-career-thumb">
												<img alt="" loading="lazy" width="309" height="252" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fthumb-2.png&amp;w=640&amp;q=75" />
											</div>
											<div class="it-career-shape-1">
												<img alt="" loading="lazy" width="642" height="350" decoding="async" data-nimg="1" src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1.png&amp;w=1920&amp;q=75" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						{/* vision and mission end*/}

						{/* President message start*/}
<div>
<div className="it-sv-details-area pt-120 pb-120">
			
			<div className="container">
				<div className="row">
					<div className="col-xl col-lg">
						<div className="it-sv-details-top-wrap mb-20">
							<div className="row">
								<div className="col-xl-6 col-lg-6">
									<div className="it-sv-details-top-thumb">
										<Image src={blankm} className="img-fluid"/>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6">
									<div className="it-sv-details-top-content">
										<h4 className="it-sv-details-title">About </h4>
										<p>
											 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit
										</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco laboris.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-12">
								<div className="it-sv-details-top-content mb-50">
									<h4 className="it-sv-details-title">service Description</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="it-sv-details-content-box mb-50">
									<h5 className="it-sv-details-title-sm">
										<span><i className="fa-sharp fa-light fa-check"></i></span>
										Requirements
									</h5>
									<p>Dui id ornare arcu odio ut sem nulla pharetra diam eget aliquet nibh praesent tristiq.</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="it-sv-details-content-box mb-50">
									<h5 className="it-sv-details-title-sm">
										<span><i className="fa-sharp fa-light fa-check"></i></span>
										Description
									</h5>
									<p> "Dui id ornare arcu odio ut sem nulla pharetra diam eget aliquet"</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-12">
								<div className="it-sv-details-top-content">
									<h4 className="it-sv-details-title">What you'll learn</h4>
									<p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
									<div className="it-sv-details-middle-thumb p-relative mb-30">
										<Image src="/img/service/sv-2.jpg" width={874} height={343} alt="" />
										<button className="popup-video it-pulse" onClick={() => { openModal(); }}>
											<i className="fas fa-play"></i>
										</button>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
      	</div>
						{/* President message end*/}

						<div className="it-about-4-area inner-about-style pt-120 pb-120">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-xl-6 col-lg-6">
										<div className="it-about-4-thumb-wrap d-flex align-items-center justify-content-center justify-content-lg-end">
											<div className="it-about-4-thumb-double d-flex flex-column">
												<img className="mb-20" src="/img/about/thumb-4-1.jpg" alt="" width={236} height={350} />
												<Image src="/img/about/thumb-4-2.jpg" alt="" width={236} height={350} />
											</div>
											<div className="it-about-4-thumb-single">
												<Image src="/img/about/thumb-4-3.jpg" alt="" width={304} height={600} />
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6">
										<div className="it-about-3-title-box">
											<span className="it-section-subtitle">
												<Image src="/img/category/inner.svg" alt="" width={18} height={18} />
												about us
											</span>
											<h2 className="it-section-title-3 pb-30">we are always ensure best
												course for your <span>learning</span>
											</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
												incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi.</p>
										</div>
										<div className="it-about-3-mv-box">
											<div className="row">
												<div className="col-xl-12">
													<div className="it-about-4-list-wrap d-flex align-items-start">
														<div className="it-about-4-list-icon">
															<span><i className="flaticon-video-1"></i></span>
														</div>
														<div className="it-about-3-mv-item">
															<span className="it-about-3-mv-title">Sharing a Screen</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
																tempor incididunt ut labore et dolore magna aliqua.</p>
														</div>
													</div>
												</div>
												<div className="col-xl-12">
													<div className="it-about-4-list-wrap d-flex align-items-start">
														<div className="it-about-4-list-icon">
															<span><i className="flaticon-puzzle"></i></span>
														</div>
														<div className="it-about-3-mv-item">
															<span className="it-about-3-mv-title">presenter Control</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="it-about-3-btn-box p-relative">
											<a className="it-btn" href="contact">
												<span>
													admission open
													<svg width="17" height="14" viewBox="0 0 17 14" fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5"
															strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10"
															strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
											<div className="it-about-3-left-shape-3 d-none d-xl-block">
												<Image src="/img/about/about-3-shap-3.png" alt="" width={266} height={52} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>


	)
}
