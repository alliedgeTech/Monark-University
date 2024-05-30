import Image from "next/image";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function ServiceDetailsArea({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  if (!item) {
    return <div>Loading...</div>;
  }
  const { title, description } = item;

  return (
    <div className="it-sv-details-area pt-120 pb-120">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => { openModal(); }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <div className="it-sv-details-top-wrap mb-20">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="it-sv-details-top-thumb">
                    <Image src="/img/service/sv-1.jpg" width={387} height={387} alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="it-sv-details-top-content">
                    <h4 className="it-sv-details-title">{title ? title : "web design"}</h4>
                    <p>
                      {description
                        ? description
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit."}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="it-sv-details-top-content mb-50">
                  <h4 className="it-sv-details-title">service Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    Requirements
                  </h5>
                  <p>Dui id ornare arcu odio ut sem nulla pharetra diam eget aliquet nibh praesent tristiq.</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    Description
                  </h5>
                  <p>{description ? description : "Dui id ornare arcu odio ut sem nulla pharetra diam eget aliquet"}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="it-sv-details-top-content">
                  <h4 className="it-sv-details-title">What you'll learn</h4>
                  <p className="mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                  </p>
                  <div className="it-sv-details-middle-thumb p-relative mb-30">
                    <Image src="/img/service/sv-2.jpg" width={874} height={343} alt="" />
                    <button className="popup-video it-pulse" onClick={() => { openModal(); }}>
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
