import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 1,
    margin: 10,
  },
  768: {
    items: 1,
    margin: 10,
  },
  1024: {
    items: 1,
    margin: 20,
  },
};


const index = () => {
  return (
    <div className='life-section py-5'>
        <div className="life-heading text-center">
            {/* <h4>Start With Your Brightest Idea</h4> */}
            <h1>Our Latest <span>EVENTS</span></h1>
            <h2 className='width_50 mx-auto mt-4'>Highlights: An Overview of Former University Activities</h2>
        </div>
        <div className="container">
          <OwlCarousel
             className="owl-theme"
             autoPlay={true}
             margin={10}
             loop={true}
             responsive={Responsive}
             responsiveRefreshRate={0}
             autoplay={true}
             autoplayTimeout={3000}
             autoplayHoverPause={false}
          >
            <div className="item">
              <div className="row">
                <div className="col-lg-6 col-12 mt-20">
                  <div className="col">
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1714241759740-75a397e2a174?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                      </div>
                    </div>
                    <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1586863513779-2d0b413bd512?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717781617540-9f31ba241a4e?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                <div className="col">
                <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717620378025-f6db51a392a2?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1614273845736-dc4df920c51a?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1496535731694-9673400f50c9?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-lg-6 col-12 mt-20">
                  <div className="col">
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1714241759740-75a397e2a174?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                      </div>
                    </div>
                    <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1586863513779-2d0b413bd512?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717781617540-9f31ba241a4e?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                <div className="col">
                <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717620378025-f6db51a392a2?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1614273845736-dc4df920c51a?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1496535731694-9673400f50c9?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-lg-6 col-12 mt-20">
                  <div className="col">
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1714241759740-75a397e2a174?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                      </div>
                    </div>
                    <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1586863513779-2d0b413bd512?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717781617540-9f31ba241a4e?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                <div className="col">
                <div className="row-6">
                      <div className="row">
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1717620378025-f6db51a392a2?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                        <div className="col-6 mt-4">
                          <div className="img-box">
                          <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1614273845736-dc4df920c51a?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-6 mt-4">
                      <div className="img-box">
                      <img className='img-fluid h-100' src="https://images.unsplash.com/photo-1496535731694-9673400f50c9?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8" alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
    </div>
  )
}

export default index
