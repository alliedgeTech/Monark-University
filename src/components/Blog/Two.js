import Image from "next/image";
import Link from "next/link";

export default function SingleBlogTwo( props ) {
	const { blogClass, Slug, Img, Title, Author, publishedDate, btnText, imgWidth, imgHeight } = props;
	
	return (
		<div className={blogClass ? blogClass : 'it-blog-item'}> 
			<div className="it-blog-thumb fix">
				<Link href={`/blog/${Slug ? Slug : 'details'}`}>
					<Image src={Img ? Img : '/img/blog/blog-1-7.jpg'} width={imgWidth ? imgWidth : 648} height={imgHeight ? imgHeight : 427} alt="" />
				</Link>
			</div>
			<div className="it-blog-content">
				<div className="it-blog-meta pb-25">
					<span>
						<i className="fa-light fa-user"></i>
						{Author ? Author : 'Sunilra Smoth'}</span>
					<span>
					<i className="fa-light fa-calendar-days"></i>
					{publishedDate ? publishedDate : 'March 28, 2023'}</span>
				</div>
				<h4 className="it-blog-title pb-5">
					<Link href={`/blog/${Slug ? Slug : 'details'}`}>{Title ? Title : 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'}</Link>
				</h4>
				<Link href={`/blog/${Slug ? Slug : 'details'}`} className="it-btn blue-bg">
					<span>{btnText ? btnText : 'Read More'}
						<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</span>
				</Link>
			</div>
		</div>
	)
}
