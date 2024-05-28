import Services3 from "@/data/services3"
import SingleFeatureThree from "@/components/Feature/Three"

export default function ServiceThreeArea() {
	return (
		<div className="it-feature-area grey-bg it-feature-style-2 pt-120 pb-120">
			<div className="container">
				<div className="row">
					{
						Services3.map((service) => {
							return (
								<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
									<SingleFeatureThree 
										Slug={service.slug}
										Icon={service.icon}
										Title={service.title}
										Description={service.description}
										btnText={service.btnText}
									/>
								</div>
							);
						})
					}
				</div>
			</div>
		</div>
	)
}
