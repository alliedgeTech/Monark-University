import SingleCourse from "@/components/Course"
import Courses from "@/data/courses"
import syllabusdetailsdata from "@/data/syllabus";

export default function CourseArea() {
	return (
		<div className="it-course-area p-relative pt-120 pb-120">
			<div className="container">
				<div className="row">
				{
					syllabusdetailsdata.map((s) => {
						return (
							<div>
								<SingleCourse 
								Title={s.Title}
								Title2={s.Title2}
								Title3={s.Title3}
								/>
							</div>
						);
					})
				}
				{
					Courses.map((course) => {
						return (
							<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
								<SingleCourse 
									ID={course.id}
									Slug={course.slug}
									Title={course.title}
									Img={course.image}
									category={course.category}
									ratingCount={course.ratingCount} 
									lessonCount={course.lessonCount}
									studentCount={course.studentCount}
									Duration={course.duration}
									Author={course.author}
									Price={course.price}
									prevPrice={course.prevPrice}
									btnText={course.btnText}
								/>
							</div>
						);
					}).slice(9, 12)
				}
				</div>
			</div>
		</div>
	)
}
