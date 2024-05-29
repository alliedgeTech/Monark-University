import Image from "next/image"
import Link from "next/link"

export default function About() {
	return (
		<div className="student-placement">
			<h2>Student Placement</h2>
			<hr className="mb-4" />
			<marquee behavior="" direction="">
				<div className="margquee-img">
					<Image></Image>
				</div>
			</marquee>
		</div>
	)
}
