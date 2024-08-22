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
      const response = await fetch(
        `https://monarkuniversitybacked.onrender.com/home-updates/${_id}`
      );
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
    <div className="postbox__area pt-120">
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
                      {newsItem.lastDate}
                    </span>
                  </div>
                  <h4 className="postbox__title mb-20">{newsItem.title}</h4>
                  <p>{newsItem.description}</p>
                </div>
                <div className="postbox__content pb-20">
                  <p>{newsItem.content}</p>
                  <h5>Position: {newsItem.position}</h5>
                </div>
                <div className="postbox__content pb-20">
                  <h6>Location: {newsItem.location}</h6>
                </div>
                <div className="postbox__content pb-20">
                  <h6>Qualification: {newsItem.qualification}</h6>
                </div>
                <div className="postbox__content pb-20">
                  <h6>OfferedCTC: {newsItem.offeredCTC}</h6>
                </div>
                <div className="postbox__content pb-20">
                  <h6>Report to: {newsItem.reportTo}</h6>
                </div>
                <div className="postbox__content pb-20">
                  <p>Job Description: {newsItem.jobDescription}</p>
                </div>
                <div className="postbox__content pb-20">
                  <h6>
                    Candidate Required Profile:
                    {newsItem.candidateRequiredProfile}
                  </h6>
                </div>
                <div className="postbox__details-tag">
                  <Link href={newsItem.registrationLink} target="_blank">
                    
                    Register Here
                  </Link>
                  <div className="postbox__details-share-wrapper">
                    <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-7 col-md-7"></div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="postbox__details-share text-lg-end">
                          <span>Share:</span>
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="postbox__content-wrap">
                  <div className="it-contact__wrap">
                    <div className="it-contact__text pb-30">
                      <h5 className="it-contact__title">Let’s Get in Touch</h5>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>
                    <div className="it-contact__form-box">
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input type="text" placeholder="Your Name*" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input
                                type="email"
                                placeholder="Email Address*"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input type="email" placeholder="Website*" />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="it-contact__textarea-box">
                              <textarea placeholder="Write Your Message*"></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                      <button type="submit" className="it-btn">
                        <span>
                          Send Message
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1.24023L16 7.24023L11 13.2402"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 7.24023H16"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div> */}
              </article>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="it-sv-details-sidebar">
              <div className="sidebar__widget mb-55">
                <div className="sidebar__widge-title-box">
                  <h3 className="sidebar__widget-title pb-10">Recent Post</h3>
                </div>
                <div className="sidebar__widget-content">
                  <div className="sidebar__post">
                    <div className="rc__post mb-30 d-flex align-items-start">
                      <div className="rc__post-thumb mr-20">
                        <Link href="#">
                          <img
                            src={newsItem.image}
                            alt=""
                            width={98}
                            height={98}
                          />
                        </Link>
                      </div>
                      <div className="rc__post-content">
                        <div className="rc__meta">
                          <span>
                            <i className="fa-solid fa-calendar-days"></i>
                            {newsItem.lastDate}
                          </span>
                        </div>
                        <h3 className="rc__post-title">
                          <Link href="#">{newsItem.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
