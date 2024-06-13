
export default function BreadCrumbs( props ) {
	const { Img, Title, subTitle  } = props;
	
	const breadCrumbsStyle = {
		backgroundImage: `url(${Img ? Img : "https://img.freepik.com/free-photo/young-people-using-laptop-park_23-2147850707.jpg?t=st=1718219432~exp=1718223032~hmac=93f11e6f95aca5f1c927736aa1371d26d1bb925b2b07782b1bd0412714f6391a&w=740"})`,
		height:'350px'
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
