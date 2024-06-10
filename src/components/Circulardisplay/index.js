import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from "axios";
import Campusdisplay from "../campusdisplay";

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

const CircularAPI = async ({ method, endpoint, data }) => {
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

const index = () => {
  const [circular, setCircular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await CircularAPI({
        method: "GET",
        endpoint: "https://mu-l50w.onrender.com/circulars",
      });
      setCircular(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="placement" id="circular">
      <div id="latest-news" className="Latest-News container py-4">
        <div className="student-placement-heading d-flex align-items-center justify-content-center mb-20">
          <div className="line"></div>
          <h1 className="text-center mb-0 w-100">Circular</h1>
          <div className="line"></div>
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
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Circular</th>
                      <th>Download</th>
                    </tr>
                    {circular.map((item, id) => {
                      return (
                        <tr>
                          <td>{item.uploadDate}</td>
                          <td>{item.name}</td>
                          <td>
                            <a href={item.documentUrl} target="_blank">
                              <button>Go to Example</button>
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

export default index;
