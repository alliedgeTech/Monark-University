
import Banner from "./Banner"
import Category from "./Category"
import Course from "./Course"
import About from "./About"
import Video from "./Video"
import Service from "./Service"
import Funfact from "./Funfact"
import Testimonial from "./Testimonial"
import Team from "./Team"
import Career from "./Career"
import Blog from "./Blog"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import CounterDisplay from "@/components/CounterDisplay"
import Lifemu from "@/components/Lifemu"
import Enquiry from "@/components/Enquirydisplay"
import Highlight from "@/components/Highlight"

export default function HomeOneModules() {
	return (
		<main>
			<Enquiry/>
			<Banner />
			<Category />
			<CounterDisplay />
			<Highlight/>
			<Service />
			<About />
			<Lifemu/>
			<Course />
			<Video />
			<Funfact />
			<Testimonial />
			<Team />
			<Career />
			<Blog />
			<Newsletter />
			<ScrollTop />
			    
		</main>
	)
}
