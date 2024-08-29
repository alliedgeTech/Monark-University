import infrastructuredata from "@/data/infra";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import librarydata from "@/data/library";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'aos/dist/aos.css'; // Import AOS CSS
import aos from 'aos'; // Import AOS library

const Infrastructuredisplay = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 800, // Duration of animation (in milliseconds)
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
      <div id="library">
        <div className="it-choose-area p-relative py-3">
          <div className="container">
                  <div className="it-choose-title-box mb-30 university-title-gsap">
                    <div className="three">
                    <h1 className="it-section-title" data-aos="fade-up">University Library</h1>

                    </div>
                  </div>
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="it-choose-left">
                  <div className="it-choose-text pb-15 pr-8 university-text-gsap">
                    <p>
                      The Central Library of Monark University is user-focused,
                      innovative, and excellence driven. It has specialized
                      collections of Books, Journals & other resources in
                      Engineering and Technology, Paramedical, Health Sciences,
                      Liberal Arts, Commerce, Science, and Education etc. The
                      Library implemented SOUL 3.0 software (Library Automation
                      Software), which supports all housekeeping operations of
                      the library.The library system and staff is meticulously
                      focused for providing comfortable, user friendly
                      environment so as to enables learning and knowledge
                      creation.Also, the library has a membership of National
                      Digital Library (NDL).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="it-choose-thumb-box text-center text-md-end infra-img-gsap">
                  <div className="it-choose p-relative">
                    <img
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-209.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  
                  </div>
                </div>
              </div>
              <p className="mt-4" data-aos='fade-up'> More than 10 million documents are
                      available in NDL including e-books, journal articles,
                      video lectures etc. Library LAN has become a part of
                      campus wise network, which has made it possible for the
                      academic community of various departments to access
                      information. Reading room of the library having total
                      seating capacity of 200 students at a time. All Collection
                      of the library can also be accessed through web OPAC at
                      any terminal on the campus network.</p>
            </div>
          </div>
        </div>

        <div
          className="it-funfact-5-area it-funfact-5-bg p-relative fix py-5"
          data-background="/img/funfact/bg-2.png"
        >
          <div className="it-funfact-5-shape-1 d-none d-xxl-block">
            <img
              src="/img/funfact/shape-5-1.png"
              alt=""
              width={107}
              height={101}
            />
          </div>
          <div className="container">
            {librarydata && (
              <div className="row">
                {librarydata.map((library, num) => (
                  <div data-aos='zoom-out' key={num} className="col-xl-4  col-lg-4 col-md-6 col-6 mb-40">
                    <div className="it-funfact-5-item rounded-3 text-center counter-gsap">
                      <div className="it-funfact-5-icon">
                        <span>
                          <img src={library.countIcon} className="img-fluid" />
                        </span>
                      </div>
                      <div className="it-funfact-5-content mt-lg-4 mt-0">
                        <h4 className="it-funfact-5-number purecounter">
                          <CountUp
                            start={state ? 0 : library.countNum}
                            end={library.countNum}
                            duration={10}
                            onEnd={() => setState(false)}
                          />
                        </h4>
                        <span>{library.countTitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container"  id="hostel">
        <div className="row">
          <div className="it-career-title-box  mb-20">
            <div className="three">
              <h1 className="" data-aos="fade-up">Hostel</h1>
            </div>
            <p data-aos='fade-right'>
              The University also provides in-campus residential facilities for
              boys and girls which offers students an amazing place for living.
              The Hostel rooms are spacious and well furnished with internet
              connectivity to meet general needs of the students. A Place where
              students” Relax,study,develop” through Experience a new living
              style
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
                  <div className={"it-blog-item"} data-aos='zoom-in-left'>
                    <div className="it-blog-thumb fix">
                      <img src={inf.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(4, 6)}
        </div>
      </div>
    </div>
  );
};
export default Infrastructuredisplay;
