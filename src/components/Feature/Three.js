import Link from "next/link";

export default function SingleFeatureThree( props ) {
	const { featureClass, Icon, Title, Description, btnText, Slug  } = props;
	return (
		<div className={featureClass ? featureClass : 'it-feature-3-item mb-30  text-center'}>  
			<div className="it-feature-3-icon">
				<span><i className={Icon ? Icon : 'flaticon-coach'}></i></span>
			</div>
			<div className="it-feature-3-content">
				<h4 className="it-feature-3-title">
					<Link href={`/services-3/${Slug ? Slug : 'details'}`}>
						{Title ? Title : 'Best Coaching'}
					</Link>
				</h4>
				<p className="text-center">Course: {Description ? Description : '1'}</p>
			</div>
			<div className="it-feature-3-btn">
				<Link className="it-btn-theme-sm" href={`/services-3/ser/?id=${Slug ? Slug : 'details'}`}>
					<span>
						view details
						<svg width="17" height="14" viewBox="0 0 17 14" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5"
								strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5"
								strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</span>
				</Link>
			</div>
		</div>
	)
}
