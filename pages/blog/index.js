import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Head from "next/head";

const BlogModules = dynamic(() => import("@/modules/Blog"), {
  loading: () => <Preloader />,
});

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Media Coverage - Monark University</title>
        <meta
          name="description"
          content="Explore Monark University's notable media coverages, including photos of newspaper features in Divya Bhaskar. Discover memorable events and celebrity appearances that highlight our vibrant campus life and academic achievements."
        />
		<meta
          name="keywords"
          content="Monark University media coverage, Monark University in Divya Bhaskar, Monark University memorable events, Monark University celebrity appearances, Monark University newspaper features, Monark University campus life"
        />
      </Head>
      <Header />
	  <BlogModules />
	  <Footer />
    </main>
  );
}
