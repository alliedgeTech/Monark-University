import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from 'axios';

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// Responsive settings for OwlCarousel
const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 1,
    margin: 10,
  },
  556: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 3,
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

// Main component
export default function Video() {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await ApiService({
        method: "GET",
        endpoint: "https://monarkuniversitybacked.onrender.com/home-updates",
      });
      setLatestNews(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="Latest-News py-5 px-lg-5 px-2">
      <div className="container">
        <div className="student-placement-heading mb-20">
          <div className="three">
          <h1 className="mb-0">Latest News</h1>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={10}
            autoPlay={true}
            responsive={Responsive}
            responsiveRefreshRate={100}
            autoplayTimeout={3000}
          >
            {latestNews.map((item, index) => (
              <div className="item p-2">
                <div className="news-card p-3">
                  <div className="news-head">
                    <div className="news-img-box">
                      <img src={item.image} alt="" />
                      <button className="hover-btn news-hover-btn px-4">
                        <div className="text-div">
                          <small>Read</small>
                          <small>More</small>
                        </div>
                      </button>
                    </div>
                    {/* <div className="news-date-btn mt-2">
                      <small>{item.lastDate}</small>
                    </div> */}
                    <div className="news-info-box mt-4">
                    <h4>{item.title}</h4>
                    <small className="news-description-ellips">{item.description}</small>
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
}