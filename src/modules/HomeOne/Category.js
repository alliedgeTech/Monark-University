import SingleCategory from "@/components/Service"
import Image from "next/image"
import Link from "next/link"
import Services from "@/data/services"
import { useEffect } from "react";
import best1 from "../../../public/img/category/best-2.jpg"
import best2 from "../../../public/img/category/best-3.jpg"
import best3 from "../../../public/img/category/best-7.jpg"
import best4 from "../../../public/img/category/best-4.jpg"


export default function Category() {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	  }, []);
	return (
		<div className="best-university container py-5">
			<div className="row">
				<div className="col-lg-6">
				<div id="carouselExampleAutoplaying" class="carousel carousel-fade slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
		<Image className="img-fluid" src={best1}></Image>
    </div>
    <div class="carousel-item">
		<Image className="img-fluid" src={best2}></Image>
    </div>
    <div class="carousel-item">
		<Image className="img-fluid" src={best3}></Image>
    </div>
    <div class="carousel-item">
		<Image className="img-fluid" src={best4}></Image>
    </div>
    
  </div>
</div>
				</div>
				<div className="col-lg-6">
					<div className="best-university-text">
						<h2>Best University in Ahmedabad</h2>
						<p>Monark University is one of the leading University in Gujarat, which provides Quality Education to the aspirants.  Various study options available at Monark University and required Infrastructure for the courses makes the University on of the best option for study. </p>
						<p>Monark University is committed to engaging with the key issues of our natural and social worlds through outstanding teaching, research, and scholarship. Monark University will provide a vibrant and supportive intellectual environment that attracts and connects people from all over the world.</p>
						<button className="text-white" style={{borderRadius:'5px',padding:'4px 12px', background:'#054B81'}}>More Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}
