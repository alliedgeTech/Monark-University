import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <img src={props.imageUrl} alt={`Page ${props.number}`} />
    </div>
  );
});

const Index = () => {
  const pages = [
    {
      number: 1,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051178/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_1_zmy2bm.jpg",
    },
    {
      number: 2,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051178/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_2_nflhfz.jpg",
    },
    {
      number: 3,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051177/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_3_cok0ei.jpg",
    },
    {
      number: 4,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051178/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_4_uhzlgw.jpg",
    },
    {
      number: 5,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051178/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_5_vzy7m9.jpg",
    },
    {
      number: 6,
      imageUrl:
        "https://res.cloudinary.com/dnjgopun8/image/upload/v1719051178/1719050971272-6ab278fb-915d-411e-ab0a-02c6025169440_6_jvldki.jpg",
    },
  ];

  useEffect(() => {
    const carousel = document.getElementById('carouselExampleIndicators2');
    const buttons = document.querySelectorAll('.carousel-club-buttons button');

    const handleSlide = (event) => {
      buttons.forEach((button) => button.classList.remove('active'));
      buttons[event.to].classList.add('active');
    };

    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', handleSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('slide.bs.carousel', handleSlide);
      }
    };
  }, []);

  return (
    <div className="mt-100 mb-200 year">
            <div className="d-flex align-items-center justify-content-center gap-4 mb-30">
              <Link href='/mumirror'>
              <button
                data-aos='fade-up'
                type="button"
                className="ski-button "
            >
                2022
            </button>
              </Link>
            <Link href='/mumirror2'>
            <button
                data-aos='fade-up'
                type="button"
                className="ski-button y2023"
            >
                2023
            </button></Link>
            
            <Link href='/mumirror3'>
            <button
                data-aos='fade-up'
                type="button"
                className="ski-button"
            >
                2024
            </button>
            </Link>
            

            </div>

          <div className="book">
          <HTMLFlipBook className="book mx-auto" width={370} height={600}>
              {/* <div className="start-box d-flex align-items-center justify-content-center">
                <h1>2024</h1>
              </div> */}
              {pages.map((page) => (
                <Page
                  key={page.number}
                  number={page.number}
                  imageUrl={page.imageUrl}
                />
              ))}
              {/* <div className="start-box d-flex align-items-center justify-content-center">
                <h1>End 2024</h1>
              </div> */}
            </HTMLFlipBook>
          </div>
      </div>
  );
};

export default Index;