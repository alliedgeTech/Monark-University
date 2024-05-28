import SingleCategory from "@/components/Service"
import Services from "@/data/services"

export default function ServiceArea() {
	return (
		<div className="it-category-area pt-120 pb-120">
			<div className="container">
			Diploma Engineering
				<div className="row">
					{
						Services.map((service) => {
							return (
								<div className="col-xl-3 col-lg-3 col-md-6 mb-30">
									<SingleCategory 
										Slug={service.slug}
										Icon={service.icon}
										Title={service.title}
										courseCount={service.courseCount}
									/>
								</div>
							);
						}).slice(0, 8)
					}
				</div>
			</div>
		</div>
	)
}
