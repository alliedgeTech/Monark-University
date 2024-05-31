import Sidebar from "@/components/Blog/Sidebar"
import SingleBlogThree from "@/components/Blog/Three"
import Blogs from "@/data/blogs"
import Image from "next/image";
import Link from "next/link";

export default function BlogArea() {
	return (
		<div className="postbox__area pt-120 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="postbox__details-wrapper">
							{
								Blogs.map((blog) => {
									return (
										<SingleBlogThree 
											blogClass="postbox__thumb-box mb-80"
											Slug={blog.slug}
											Title={blog.title}
											Img={blog.image}
											Author={blog.Author} 
											publishedDate={blog.publishedDate}
											btnText={blog.btnText}
										/>
									);
								}).slice(13, 16)
							}
						</div>
					</div>
					<div className="col-xxl-6 col-xl-6 col-lg-6">
						<Sidebar />
					</div>
				</div>
				
			</div>
		</div>
	)
}
