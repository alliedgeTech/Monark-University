import Image from "next/image";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Diploma from "@/data/diploma"

export default function ServiceDetailsArea({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  console.log(item)

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
                    <Image src="/img/service/sv-1.jpg" width={387} height={400} alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="it-sv-details-top-content">
                    <h4 className="it-sv-details-title">{Diploma[0].title}</h4>
                    <p>
                      {Diploma[0].titlePera}
                    </p>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="it-sv-details-top-content mb-50">
                  <h4 className="it-sv-details-title">Program Outcomes</h4>
                  <p>
                   {Diploma[0].programOutcomesPera}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    Course Duration
                  </h5>
                  <p>{Diploma[0].coureDuration}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    Eligibility Criteria
                  </h5>
                  <p>{Diploma[0].eligibilityCriteria}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    Annual Fees
                  </h5>
                  <p>{Diploma[0].annualFees}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-sv-details-content-box mb-50">
                  <h5 className="it-sv-details-title-sm">
                    <span><i className="fa-sharp fa-light fa-check"></i></span>
                    From
                  </h5>
                  <p>{Diploma[0].coureDuration}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="it-sv-details-top-content">
                  <h4 className="it-sv-details-title">{Diploma[0].laboratories[0].title}</h4>
                  <p className="mb-30">
                  </p>
                  <div className="it-sv-details-middle-thumb p-relative mb-30">
                    <Image src="/img/service/sv-2.jpg" width={874} height={343} alt="" />
                    <button className="popup-video it-pulse" onClick={() => { openModal(); }}>
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <p>
                  {Diploma[0].laboratories[0].pera}
                  </p>
                  <p>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="it-sv-details-top-content">
                  <h4 className="it-sv-details-title">{Diploma[1].laboratories[1].title}</h4>
                  <p className="mb-30">
                  </p>
                  <div className="it-sv-details-middle-thumb p-relative mb-30">
                    <Image src="/img/service/sv-2.jpg" width={874} height={343} alt="" />
                    <button className="popup-video it-pulse" onClick={() => { openModal(); }}>
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <p>
                  {Diploma[1].laboratories[1].pera}
                  </p>
                  <p>
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
