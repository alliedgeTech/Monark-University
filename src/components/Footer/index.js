import Image from 'next/image';
import Link from 'next/link';
import footerImg from "../../../public/img/logo/MONARK_LOGO.png"

export default function Footer(props) {
	const { footerLogo, footerClass } = props
	return (
		<footer className='footer  pt-3'>
			<div className="container">
				{/* <div className="footer-up py-1">
					<div className="row">
						<div className="col-lg-4 col-md-3 col-sm-12">
							<div className='footer-logo d-flex'>
								<Image className='img-fluid' style={{maxWidth:'140px'}} src={footerImg}></Image>
							</div>
						</div>
						<div className="col-lg-8 col-md-9 col-sm-12 mt-4 mt-lg-0">
							
						</div>
					</div>
				</div> */}
				<div className="footer-middle pb-3">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
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
									<li><a href="/placement">Placement</a></li>
									<li><a href="">Alumni</a></li>
									<li><a href="/career">Career @ MU</a></li>
								</ul>

							</div>
						</div>
						{/* <div className="col-lg-3 col-md-6 col-12">
							<h6>Multi-Skills Development & Training Centre</h6>
							<ul>
								<li><a href="/faculty#music">Music & Production</a></li>
								<li><a href="/faculty#fitness">Fitness & Nutriton</a></li>
								<li><a href="/faculty#it">IT Courses</a></li>
								<li><a href="/faculty#aviation">Aviation & Management</a></li>
								<li><a href="/faculty#mlt"> Medical Laboratory Technology (MLT)</a></li>
								<li><a href="/faculty#hair">Hair Dressing & Beauty</a></li>
							</ul>
						</div> */}
						<div className="col-lg-6 col-md-6 col-12">
						<div className="d-flex flex-column ">
								<h6>List of Institutes</h6>
								<div className="d-flex flex-column flex-lg-row justify-content-around">
									<ul className='faculty-list-1'>
										
										<li><Link href="/faculty?id=2">Faculty of Science</Link></li>
										<li><Link href="/faculty?id=9">Faculty of Nursing</Link></li>
										<li><Link href="/faculty?id=6">Faculty of Law</Link></li>
										<li><Link href="/faculty?id=7">Faculty of Arts</Link></li>
										<li><Link href="/faculty?id=10">Faculty of Education</Link></li>
										<li><Link href="/faculty?id=11">Faculty of Social Work</Link></li>
										<li><Link href="/faculty?id=13">Faculty of Ayurved</Link></li>
									</ul>
									<ul className='faculty-list-2' >
										<li><Link href="/faculty?id=4">Faculty of Management</Link></li>
										<li><Link href="/faculty?id=5">Faculty of Commerce</Link></li>
										<li><Link href="/faculty?id=1">Faculty of Engineering & Technology</Link></li>
										<li><Link href="/faculty?id=3">Faculty of Physiotherapy</Link></li>
										<li><Link href="/faculty?id=8">Faculty of Computer Application</Link></li>
										<li><Link href="/faculty?id=14">Faculty of Homeopathy</Link></li>
										<li><Link href="/faculty?id=15">Faculty of Information &  Communication Technology</Link></li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-3 col-md-6 col-12" >
							<div className="d-flex flex-column">
								<h6>Contact detail</h6>
								<ul style={{listStyle:'none'}}>
									<li><a href="tel:+91 7970707001">+91-7970707001</a></li>
									<li><a href="tel:+91 2718-247138/215">+91-2718-247138/215</a></li>
									<li><a href="tel:+91 2718-247131">+91-2718-247131</a></li>
									<li><a href="mailto:info@monarkuni.ac.in">info@monarkuni.ac.in</a></li>
									<li><a href="">At. & Post Vahelal, Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330</a></li>
								</ul>
							</div>
							<div className="d-flex align=items-center mt-3">
								<Link target='_blank'  href="https://www.facebook.com/monark.university" >
									<button className='footer-btn'><i class="fa-brands fa-facebook"></i></button>
								</Link>
								<Link target='_blank' href="https://x.com/monarkuni?mx=2" >
									<button className='footer-btn'><i class="fa-brands fa-twitter"></i></button>
								</Link>
								<Link target='_blank' href="https://www.instagram.com/hgce_vahelal/" >
									<button className='footer-btn'><i class="fa-brands fa-instagram"></i></button>
								</Link>
								<Link target='_blank' href="https://www.linkedin.com/company/monark-university/" >
									<button className='footer-btn'><i class="fa-brands fa-linkedin"></i></button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div className="footer-bottom	text-center" style={{background:'#001A39'}}>
					<small className=' mb-0 text-white'>Copyright © 2024 Monark University</small>
				</div>
		</footer>
	)
}
