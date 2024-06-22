import SingleFeatureTwo from "@/components/Feature/Two"
import Services2 from "@/data/after12"

export default function ServiceTwoArea() {
	return (
		<div className="it-feature-3-area it-feature-3-bg it-feature-3-style pt-120 pb-90">
			<div className="container">
				<div className="row">
					{
						Services2.map((service) => {
							return (
								<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
									<SingleFeatureTwo 
										Slug={service.id}
										Icon={service.icon}
										Title={service.branchName}
										count={service.courseCount}
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
