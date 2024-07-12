import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

const Campusdisplay = () => {
  const [campusData, setCampusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const result = await ApiService({
          method: "GET",
          endpoint: `https://monarkuniversitybacked.onrender.com/Campus`,
        });
        setCampusData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!campusData || campusData.length === 0) return <div>No data found</div>;

  const campusToShow = campusData.find((campus) => campus._id === id);

  if (!campusToShow) return <div>Campus not found</div>;

  return (
    <div className="campus-life-section">
      <div className="container py-5">
        <div className="campus-texts">
          <div className="three campus-heading">
            <h1>{campusToShow.title}</h1>
          </div>
          <p>{campusToShow.description}</p>
        </div>
        <div className="campus-gallery">
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
            <div className="item" >
              <div className="row">

            {campusToShow.images.map((image, index) => (
              <div className="col-lg-4 mb-4">
                <div className="campus-images">
                  <img src={image} alt="" />
                </div>
              </div>
            ))}
            </div>
              </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Campusdisplay;
