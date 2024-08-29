import infrastructuredata from "@/data/infra";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import librarydata from "@/data/library";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'aos/dist/aos.css'; 
import aos from 'aos'; 

const Infrastructuredisplay = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    let mm=gsap.matchMedia()

    mm.add("(min-width:991px)",()=>{
      gsap.from(".university-title-gsap", {
        opacity:0,
        x:-100,
        scrollTrigger: {
          trigger: ".university-title-gsap",
          scroller:'body',
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });
  
      gsap.from(".university-text-gsap p",{
        opacity:0,
        x:'-100',
        scrollTrigger: {
          trigger: ".university-text-gsap p",
          scroller:'body',
          start: "top bottom",
          end: "top center",
          scrub: 0.2,
        },
      })
      gsap.from(".infra-img-gsap",{
        opacity:0,
        x:'100',
        scrollTrigger: {
          trigger: ".infra-img-gsap",
          scroller:'body',
          start: "top bottom",
          end: "top center",
          scrub: 0.2,
        },
      })
      
     


    })


  }, []);


  const [state, setState] = useState(true);
  return (
    <div className="it-blog-area it-blog-style-3 it-blog-style-6 pt-20 pb-90">
      <div className="container" id="lab">
        <div className="row">
          <div className="it-career-title-box mb-10">
            <div className="three mb-5" data-aos='fade-up'>
            <h1 className="">Laboratories</h1>

            </div>
            <p data-aos='fade-right'>
              We have a huge well equipped laboratories catering to the needs of
              basic sciences, Information & technology, Commerce & Management
              and languages. Students can search for a better solution here. A
              place for great experiments “Where science meets innovation”.
              <svg
                className="title-shape-2"
                width="168"
                height="65"
                viewBox="0 0 168 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
          </div>
          {infrastructuredata
            .map((inf, i) => {
              return (
                <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className={"it-blog-item"} data-aos='zoom-in'>
                    <div className="it-blog-thumb fix" >
                      <img src={inf.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
      </div>
      
      <div className="container" id="ac">
        <div className="row">
          <div className="it-career-title-box  mb-20">
            <div className="three mb-20" data-aos='fade-up'>
            <h1 className="">
              Auditorium & Conference Hall
            </h1>

            </div>
            <p data-aos='fade-right'>
              The University has an enormous Auditorium and Conference hall in
              the campus for various students’ activities, seminars and
              Conferences. The secret to success is written on the doors of our
              auditorium. “A place with all facilities”.” We are here with great
              difference”.
              <svg
                className="title-shape-2"
                width="168"
                height="65"
                viewBox="0 0 168 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
          </div>
          {infrastructuredata
            .map((inf, i) => {
              return (
                <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className={"it-blog-item"} data-aos='zoom-in'>
                    <div className="it-blog-thumb fix">
                      <img src={inf.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(6, 10)}
        </div>
      </div>
     
      <div className="container" id="ground">
        <div className="row">
          <div className="it-career-title-box  mb-20">
            <div className="three mb-20" data-aos='fade-up'>
            <h1 className="">
              Indoor and Outdoor Sports Ground and Court
            </h1>

            </div>
            <p data-aos='fade-right'>
              The University Campus has brought with it improved infrastructure
              for all sports activities. The students are always encouraged to
              make use of this astonishing facility regularly for their overall
              development. University has abundant facilities for numerous
              indoor & outdoor games like Bad-Minton, chess, carom, table
              tennis, cricket, and so on.
              <svg
                className="title-shape-2"
                width="168"
                height="65"
                viewBox="0 0 168 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
          </div>
          {infrastructuredata
            .map((inf, i) => {
              return (
                <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className={"it-blog-item"} data-aos='zoom-in'>
                    <div className="it-blog-thumb fix">
                      <img src={inf.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(10, 13)}
        </div>
      </div>
    </div>
  );
};
export default Infrastructuredisplay;
