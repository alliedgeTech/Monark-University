import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 


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

// ApiService function
const ApiService = async ({ method, endpoint, data }) => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Index = () => {
  const [eventImage, setEventImage] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    try {
      const result = await ApiService({
        method: "GET",
        endpoint: "https://monarkuniversitybacked.onrender.com/Event",
      });
      setEventImage(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    FetchData();
  }, []);

  return (
    <div className="life-section py-5">
      <div className="life-heading text-center" data-aos="fade-up">
        <h1>
          Our Latest <span>EVENTS</span>
        </h1>
        <h2 className="width_50 mx-auto mt-4">
          An Overview of Former University Activities
        </h2>
      </div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
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
            {eventImage.map((item, index) => (
              <div className="item" key={index}>
                <div className="row">
                  <div className="col-lg-6 col-12 mt-20">
                    <div className="col">
                      <div className="row-6 mt-4">
                        {/* <h2>{item.title}</h2> */}
                        <div className="img-box" data-aos='zoom-in'>
                          <img
                            className="img-fluid h-100"
                            src={item.eventImages[0]}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row-6">
                        <div className="row">
                          <div className="col-6 mt-4">
                            <div className="img-box" data-aos='zoom-in'>
                              <img
                                className="img-fluid h-100"
                                src={item.eventImages[1]}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-6 mt-4">
                            <div className="img-box" data-aos='zoom-in'>
                              <img
                                className="img-fluid h-100"
                                src={item.eventImages[2]}
                                alt=""
                              />
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
                            <div className="img-box" data-aos='zoom-in'>
                              <img
                                className="img-fluid h-100"
                                src={item.eventImages[3]}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-6 mt-4">
                            <div className="img-box" data-aos='zoom-in'>
                              <img
                                className="img-fluid h-100"
                                src={item.eventImages[4]}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-6 mt-4">
                        <div className="img-box" data-aos='zoom-in'>
                          <img
                            className="img-fluid h-100"
                            src={item.eventImages[0]}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Index;
