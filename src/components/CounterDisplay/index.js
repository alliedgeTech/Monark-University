import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Index = () => {
  // State to manage when each counter should start
  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);
  const [startCount4, setStartCount4] = useState(false);

  // useInView hook to detect when each counter comes into view
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1 // 10% of the element in view
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1 // 10% of the element in view
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1 // 10% of the element in view
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1 // 10% of the element in view
  });

  // useEffect to update startCount1 when ref1 is in view
  useEffect(() => {
    if (inView1) {
      setStartCount1(true);
    }
  }, [inView1]);

  // useEffect to update startCount2 when ref2 is in view
  useEffect(() => {
    if (inView2) {
      setStartCount2(true);
    }
  }, [inView2]);

  // useEffect to update startCount3 when ref3 is in view
  useEffect(() => {
    if (inView3) {
      setStartCount3(true);
    }
  }, [inView3]);

  // useEffect to update startCount4 when ref4 is in view
  useEffect(() => {
    if (inView4) {
      setStartCount4(true);
    }
  }, [inView4]);

  return (
    <div className="counter py-4">
      <div className="container">
        <div className="counter-div">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-end mt-lg-0 mt-4">
              <div className="counter-heading alumini-heading p-relative pb-4 course-heading-home">
                {/* <img className="capimg" src="/img/logo/cap2.png" alt="" /> */}
                <i class="fa-solid fa-graduation-cap"></i>
                <h1 className="mt-10" data-aos="zoom-in">
                  <span>Experience</span> Academic Diversity Like 
                  <span> Never</span> Before with Leading <span>Experts </span>
                  and <span>Comprehensive</span> Programs
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
              <div className="row py-lg-2 px-lg-5 px-2 py-1 p-relative" data-aos="zoom-in-left">
                <div className="why_mu d-flex align-items-center justify-content-center flex-column">
                 <img src="/img/logo/monarklogoonly.png" alt="" />
                </div>
                <div className="col-6">
                  <div
                    ref={ref1}
                    className="counter-box counter-box-1 d-flex align-items-center flex-column"
                  >
                    <img src="/img/counter/school.png" alt="" />
                    <h6 className="text-black">Institutes</h6>
                    <div className="count-text mt-2 d-flex align-items-center justify-content-center">
                      {startCount1 && (
                        <CountUp start={0} end={13} duration={6} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    ref={ref2}
                    className="counter-box counter-box-2 d-flex align-items-center flex-column"
                  >
                    <img src="/img/counter/network.png" alt="" />
                    <h6 className="text-black">Students</h6>
                    <div className="count-text mt-2 d-flex align-items-center justify-content-center">
                      {startCount2 && (
                        <CountUp start={0} end={7000} duration={6} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div
                    ref={ref3}
                    className="counter-box counter-box-3 d-flex align-items-center flex-column"
                  >
                    <img src="/img/counter/teacher.png" alt="" />
                    <h6 className="text-black">Faculty</h6>
                    <div className="count-text mt-2 d-flex align-items-center justify-content-center">
                      {startCount3 && (
                        <CountUp start={0} end={300} duration={6} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div
                    ref={ref4}
                    className="counter-box counter-box-4 d-flex align-items-center flex-column"
                  >
                    <img src="/img/counter/data.png" alt="" />
                    <h6 className="text-black">Programs</h6>
                    <div className="count-text mt-2 d-flex align-items-center justify-content-center">
                      {startCount4 && (
                        <CountUp start={0} end={100} duration={6} />
                      )}
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
};

export default Index;
