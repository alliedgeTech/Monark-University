import React from "react";
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* <p>{props.children}</p> */}
      {/* <p>Page number: {props.number}</p> */}
      <img src={props.imageUrl} alt={`Page ${props.number}`} />
    </div>
  );
});

const index = () => {
  // Array of objects containing page numbers and image URLs
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

  return (
    <div className="mt-100 mb-200">
      <HTMLFlipBook className="mx-auto" width={400} height={600}>
        {pages.map((page) => (
          <Page
            key={page.number}
            number={page.number}
            imageUrl={page.imageUrl}
          ></Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default index;
