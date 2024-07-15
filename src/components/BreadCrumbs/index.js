
export default function BreadCrumbs( props ) {
	const { Img, Title, subTitle  } = props;
	
	const breadCrumbsStyle = {
		backgroundImage: `url(${Img ? Img : "/img/brand/bradimg5.jpg"})`,
	}

	return (
		<div className="it-breadcrumb-area it-breadcrumb-bg" style={breadCrumbsStyle}>
			<div className="container">
				<div className="row ">
					<div className="col-md-12">
						<div className="it-breadcrumb-content z-index-3 text-center">
							<div className="it-breadcrumb-title-box">
								<h3 className="it-breadcrumb-title text-white">{Title ? Title : 'About Us'}</h3>
							</div>
							<div className="it-breadcrumb-list-wrap">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
