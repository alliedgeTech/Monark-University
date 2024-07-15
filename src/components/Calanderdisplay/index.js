import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 

import axios from "axios";

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

const CalanderAPI = async ({ method, endpoint, data }) => {
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

const Calanderdisplay = () => {
  const [calander, setCalander] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await CalanderAPI({
        method: "GET",
        endpoint:
          "https://monarkuniversitybacked.onrender.com/academic-calendars",
      });
      setCalander(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="placement" id="circular">
      <div id="latest-news" className="container-fluid py-4">
        <div className="student-placement-heading d-flex align-items-center justify-content-center mb-20">
          <div className="one" data-aos="fade-up">
            <h1 className="text-center mb-0 w-100">Academic Calander</h1>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="it-funfact-5-area it-funfact-5-bg p-relative fix py-5"
            data-background="/img/funfact/bg-2.png"
            id="officersandauthority"
          >
            <div className="container">
              <div className="row"></div>
              <div className="list-officers-table">
                <table class="rwd-table">
                  <tbody data-aos="fade-right">
                    <tr data-aos="fade-right">
                      <th>programmes</th>
                      <th>Branch</th>

                      <th>PDF</th>
                    </tr>
                    {calander.map((item, id) => {
                      return (
                        <tr data-aos="fade-right">
                          <td>{item.programs}</td>
                          <td>{item.Branch}</td>
                          <td>
                            <a href={item.pdfUrl} target="_blank">
                              <button className="btn hover-btn">
                                <div className="text-div">
                                  <small>View</small>
                                  <small>View</small>
                                </div>
                              </button>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calanderdisplay;
