import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from "axios";
import { Container, Row, Col, Table, Accordion } from "react-bootstrap";

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
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await CalanderAPI({
        method: "GET",
        endpoint: "https://mu-l50w.onrender.com/academic-calendars",
      });
      setCalander(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="postbox__area pt-120 pb-120">
      <div className="container" id="calander">
        <div className="three my-5">
          <h1 className="it-section-title-3">Academic Calendar</h1>
        </div>
        {calander.map((item, index) => (
          <></>
        ))}
      </div>
    </div>
  );
};

export default Calanderdisplay;
