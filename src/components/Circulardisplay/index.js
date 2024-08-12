import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from "axios";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 

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

const Index = () => {
  const [circular, setCircular] = useState([]);
  const [filteredCircular, setFilteredCircular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");

  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    fetchData();
  }, []);

  useEffect(() => {
    filterCircularsByYear(year);
  }, [year, circular]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await CircularAPI({
        method: "GET",
        endpoint: "https://monarkuniversitybacked.onrender.com/circulars",
      });
      setCircular(result);
      setFilteredCircular(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const filterCircularsByYear = (year) => {
    if (year === "") {
      setFilteredCircular(circular);
    } else {
      const filtered = circular.filter(
        (item) => new Date(item.uploadDate).getFullYear().toString() === year
      );
      setFilteredCircular(filtered);
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="placement mt-4" id="circular">
      <div id="latest-news" className="container-fluid py-3">
        <div className="student-placement-heading d-flex align-items-center justify-content-center mb-20">
          <div className="one" data-aos='fade-up'>
            <h1 className="mb-0">Circular</h1>
          </div>
        </div>
        <div className="filter-year mb-30 container">
          <select  name="" id="" value={year} onChange={handleYearChange}>
            <option value="">Select the Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="it-funfact-5-area it-funfact-5-bg p-relative fix py-3"
            data-background="/img/funfact/bg-2.png"
            id="officersandauthority"
          >
            <div className="container">
              <div className="row"></div>
              <div className="list-officers-table">
                <table className="rwd-table">
                  <tbody>
                    <tr data-aos='fade-right'>
                      <th>Date</th>
                      <th>Circular</th>
                      <th>Download</th>
                    </tr>
                    {filteredCircular.map((item, id) => (
                      <tr data-aos='fade-right' key={id}>
                        <td>{item.uploadDate.toString().split('T')[0]}</td>
                        <td>{item.name}</td>
                        <td>
                          <Link href={item.documentUrl} target="_blank">
                            <button className="btn hover-btn">
                              <div className="text-div">
                                <small className="text-white">Download</small>
                                <small className="text-white">Download</small>
                              </div>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
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

export default Index;
