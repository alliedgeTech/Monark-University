import Link from "next/link";

export default function SingleService( props ) {
	const { serviceClass, Slug, Icon, Title , id  } = props;
	return (
		<div className={serviceClass ? serviceClass : 'it-category-item text-center'}>  
			<div className="it-category-icon">
				<span>
					<i className={Icon ? Icon : 'flaticon-web-design'}></i>
				</span>
			</div>
			<div className="it-category-text">
				<h4 className="it-category-title">
					<Link href={`/services/${Slug}`}>{Title ? Title : 'Web Design'}</Link>
				</h4>
				<Link href={`/course${id ? '?category=' + id : ''}`}>
				</Link>
			</div>
		</div>
	)
}
