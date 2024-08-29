import { useRouter } from 'next/router';
import Courses from "@/data/courses"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseDetailsModules = dynamic(() => import('@/modules/CourseDetails'), {
  loading: () => <Preloader />,
});

export default function CourseDetails() {
	const router = useRouter();
	const { asPath } = router;
	const courseSlug = asPath.split('/')[2];

	const singleCourse = Courses.filter((course) => {
        return course.slug === courseSlug;
    });

	return (
		<main>
			<Header />

			<CourseDetailsModules item={singleCourse[0]} />

			<Footer />
		</main>
	)
}
