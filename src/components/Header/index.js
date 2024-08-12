import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import MenuItems from "./MenuItems";
import MobileMenuItems from "./MobileMenuItems";

export default function Header(props) {
  const { menuFormat } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);


  
 

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header>
        <div className="it-header-transparent">
          <div
            id="header-sticky"
            className={`it-header-2-area ${isVisible ? "header-sticky" : ""}`}
          >
            <div className="">
              <div className="it-header-2-plr">
                <div className="it-header-wrap container-fluid p-relative">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="it-header-2-logo">
                        <Link href="/">
                          <Image
                            className="img-fluid"
                            width={60}
                            height={60}
                            src="/img/logo/MULOGOR.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className=" d-none d-xl-block ms-auto">
                      <div className="it-header-2-main-menu w-100">
                        <nav className="it-menu-content">
                          <MenuItems onePage={menuFormat} />
                        </nav>
                      </div>
                    </div>
                    <div className="">
                      <div className="it-header-2-right d-flex align-items-center justify-content-end">
                        <div className="it-header-2-bar d-xl-none">
                          <button
                            className="it-menu-bar"
                            onClick={() => {
                              setOffCanvasOpen(true);
                            }}
                          >
                            <i className="fa-solid fa-bars"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={offCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => {
                setOffCanvasOpen(false);
              }}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          {/* <div className="itoffcanvas__logo">
            <Link href="/">
              <img
                className="img-fluid w-25"
                src="/img/logo/MULOGOR.png"
                alt=""
              />
            </Link>
          </div> */}
          <div className="it-menu-mobile mt-4">
            <MobileMenuItems onePage={menuFormat} />
          </div>
          
        </div>
      </div>
      <div
        className={offCanvasOpen ? "body-overlay apply" : "body-overlay"}
      ></div>
    </>
  );
}
