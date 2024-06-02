import Services3 from "@/data/pgcourses"
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
										Slug={service.id}
										Icon={service.icon}
										Title={service.branchName}
										btnText={service.btnText}
										Description={service.courseCount}
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
