import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Newsdetails() {
  const router = useRouter();
  const { _id } = router.query;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (_id) {
      fetchNewsDetails(_id);
    }
  }, [_id]);

  const fetchNewsDetails = async (_id) => {
    try {
      const response = await fetch(`https://monarkuniversitybacked.onrender.com/home-updates/${_id}`);
      const data = await response.json();
      setNewsItem(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news details:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div className="postbox__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__details-wrapper">
              <article>
                <div className="postbox__thumb mb-30 w-img">
                  <img src={newsItem.image} alt="" width={844} height={401} />
                </div>
                <div className="postbox__details-title-box pb-40">
                  <div className="postbox__meta">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                      {newsItem.date}
                    </span>
                    <span>
                      <i className="fa-regular fa-comments"></i>Comment
                    </span>
                  </div>
                  <h4 className="postbox__title mb-20">{newsItem.title}</h4>
                  <p>{newsItem.description}</p>
                </div>
                <div className="postbox__content pb-20">
                  <p>{newsItem.content}</p>
                </div>
                <div className="postbox__details-share-wrapper">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="postbox__details-tag">
                        <span>Posted in:</span>
                        <a href="#">Development</a>
                        <a href="#">Digital</a>
                        <a href="#">Tech</a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="postbox__details-share text-lg-end">
                        <span>Share:</span>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="it-sv-details-sidebar">
              {/* Sidebar content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}