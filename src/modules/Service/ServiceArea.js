import SingleCategory from "@/components/Service"
import Services from "@/data/diploma"

export default function ServiceArea() {
	return (
		<div className="it-category-area pt-30 pb-20">
			<div className="container">
				<div className="three mb-30">
					<h1>
			Diploma Engineering
					</h1>
				</div>
				<div className="row">
					{
						Services.map((service) => {
							return (
								<div className="col-xl-3 col-lg-3 col-md-6 mb-30">
									<SingleCategory 
										Icon={service.icon}
										Title={service.title}
										id={service.id}
									/>
									{console.log(service.id)}
								</div>
							);
						}).slice(0, 8)
					}
				</div>
			</div>
		</div>
	)
}
