import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
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

const ExamAPI = async ({ method, endpoint, data }) => {
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

const Examdisplay = () => {
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await ExamAPI({
        method: "GET",
        endpoint: "https://monarkuniversitybacked.onrender.com/exam-schedules",
      });
      setExam(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="placement" id="exams">
      <div id="latest-news" className="container py-4">
        <div className="student-placement-heading d-flex align-items-center justify-content-center mb-20">
          <div className="line"></div>
          <h1 className="text-center mb-0 w-100">Exam Schedule</h1>
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
                      <th>Exam</th>
                      <th>Download</th>
                    </tr>
                    {exam.map((item, id) => {
                      return (
                        <tr>
                          <td>{item.uploadDate.toString().split('T')[0]}</td>
                          <td>{item.title}</td>
                          <td>
                          <a href={item.documentUrl} target="_blank">
                              <button className="btn hover-btn">
                                <div className="text-div">
                                  <small>Download</small>
                                  <small>Download</small>
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

export default Examdisplay;
