import Image from 'next/image';
import Link from 'next/link';
import footerImg from "../../../public/img/logo/MONARK_LOGO.png"

export default function Footer(props) {
	const { footerLogo, footerClass } = props
	return (
		<footer className='footer container-fluid pt-20'>
			<div className="container">
				<div className="footer-up py-1">
					<div className="row">
						<div className="col-lg-4 col-md-3 col-sm-12">
							<div className='footer-logo d-flex'>
								<Image className='img-fluid' style={{maxWidth:'140px'}} src={footerImg}></Image>
							</div>
						</div>
						<div className="col-lg-8 col-md-9 col-sm-12 mt-4 mt-lg-0">
							<div className="footer-up-links px-4 px-lg-0 d-flex justify-content-between align-items-center h-100">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/"> About MU</a></li>
									<li><a href="/"> Admission</a></li>
								</ul>
								<ul>
									<li><a href="/"> Facaulty</a></li>
									<li><a href="/"> Academic </a></li>
									<li><a href="/">Placement </a></li>
								</ul>
								<ul>
									<li><a href="/">Campus Life</a></li>
									<li><a href="/"> Infastructure </a></li>
									<li><a href="/"> Contact Us</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr style={{background:'#dadada',height:'1px'}} />
				<div className="footer-middle py-4">
					<div className="row">
						<div className="col-lg-2 col-md-6 col-12">
							<div className="d-flex flex-column">
								<h6>Enroll With Us</h6>
								<ul>
									<li><a href="">How to apply</a></li>
								</ul>
								<h6>Print & Media</h6>
								<ul>
									<li><a href="">Media & Coverage</a></li>
									<li><a href="">MU Mirror</a></li>
									<li><a href="">MU By Rj Akash</a></li>
								</ul>
								<h6>Grow With Us</h6>
								<ul>
									<li><a href="">Placement</a></li>
									<li><a href="">Alumni</a></li>
									<li><a href="">Career @ MU</a></li>
								</ul>

							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<h6>Multi-Skills Development & Training Centre</h6>
							<ul>
								<li><a href="">Music & Production</a></li>
								<li><a href="">Fitness & Nutriton</a></li>
								<li><a href="">IT Courses</a></li>
								<li><a href="">Aviation & Management</a></li>
								<li><a href=""> Medical Laboratory Technology (MLT)</a></li>
								<li><a href="">Hair Dressing & Beauty</a></li>
							</ul>
						</div>
						<div className="col-lg-5 col-md-6 col-12">
						<div className="d-flex flex-column ">
								<h6>List of Institutes</h6>
								<div className="d-flex flex-column flex-lg-row justify-content-around">
									<ul className='faculty-list-1'>
										<li><a href="">Faculty of Science</a></li>
										<li><a href="">Faculty of Nursing</a></li>
										<li><a href="">Faculty of Nursing</a></li>
										<li><a href="">Faculty of Law</a></li>
										<li><a href="">Faculty of Arts</a></li>
										<li><a href="">Faculty of Education</a></li>
										<li><a href="">Faculty of Social Work</a></li>
										<li><a href="">Faculty of Ayurved</a></li>
									</ul>
									<ul className='faculty-list-2' >
										<li><a href="">Faculty of Management</a></li>
										<li><a href="">Faculty of Commerce</a></li>
										<li><a href="">Faculty of Engineering & Technology</a></li>
										<li><a href="">Faculty of Physiotherapy</a></li>
										<li><a href="">Faculty of Computer Application</a></li>
										<li><a href="">Faculty of Homeopathy</a></li>
										<li><a href="">Faculty of Information &  Communication Technology</a></li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-2 col-md-6 col-12">
							<div className="d-flex flex-column">
								<h6>Contact detail</h6>
								<ul>
									<li><a href="">+91-7970707001</a></li>
									<li><a href="">+91-2718-247138/215</a></li>
									<li><a href="">+91-2718-247131</a></li>
									<li><a href="">info@monarkuni.ac.in</a></li>
									<li><a href="">At. & Post Vahelal, Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div className="footer-bottom py-2	" style={{background:'#001A39'}}>
					<p className='text-center mb-0 text-white'>Copyright © 2024 Monark University</p>
				</div>
		</footer>
	)
}
