import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

export default function ContactArea() {
  const form = useRef();

  const clearData = () => {
    // alert("form submitted successfully");
    // toast.success('Form submitted Successfully!');

    toast.success("Form submitted Successfully");
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      phone: form.current.user_phone.value,
      subject: form.current.user_subject.value,
      message: form.current.user_message.value,
    };

    try {
      // Send data to your custom API
      const response = await fetch(
        "https://monarkuniversitybacked.onrender.com/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Data sent to API successfully!");
      } else {
        console.error("Failed to send data to API:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred while sending data:", error);
    }
    emailjs
      .send(
        "service_9y6z79f",
        "template_cu7jq6d",
        {
          ...formData,
          name: formData.name,
          to_email: formData.email, // This should match the placeholder in your EmailJS template
        },
        "gaBMXTFNKp21YKQZh"
      )
      .then(
        (result) => {
          console.log("User email sent:", result.text);
        },
        (error) => {
          console.error("Failed to send user email:", error.text);
        }
      );

    // Send email to client
    emailjs
      .send(
        "service_9y6z79f",
        "template_enl7hcv",
        formData,
        "gaBMXTFNKp21YKQZh"
      )
      .then(
        (result) => {
          console.log("Client email sent:", result.text);
        },
        (error) => {
          console.log("Failed to send client email:", error.text);
        }
      );
  };

  return (
    <div className="it-contact__area py-4">
      <div className="container">
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block"></div>
          <div className="it-contact__section-box three pb-20">
            <h1 className="it-contact__title pb-15">Get in Touch</h1>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="it-contact__right-box">
                <div className="it-contact__content">
                  <ul>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Our Address</span>
                          <Link href="#">
                            At. & Post Vahelal, Naroda-Dahegam Road,
                            <br />
                            Ta. Dascroi, Dist. Ahmedabad-382330 (Gujarat) India.
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Gmail</span>
                          <Link href="mailto:info@monarkuni.ac.in">
                            info@monarkuni.ac.in
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-phone phone"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>contact</span>
                          <Link href="tel:+7970707001">+91-7970707001</Link>
                          <Link href="tel:+2718-247138">+91-2718-247138/215</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="it-contact__bottom-box d-flex align-items-center justify-content-between mt-20">
                <div className="d-flex align=items-center mt-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/monark.university"
                >
                  <button className="footer-btn">
                    <i className="fa-brands fa-facebook"></i>
                  </button>
                </Link>
                <Link target="_blank" href="https://x.com/monarkuni?mx=2">
                  <button className="footer-btn">
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/hgce_vahelal/"
                >
                  <button className="footer-btn">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/monark-university/"
                >
                  <button className="footer-btn">
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </Link>
              </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="it-contact__form-box">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Name*</label>
                        <input
                          type="text"
                          placeholder="Name"
                          name="user_name"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Phone*</label>
                        <input
                          type="text"
                          placeholder="Phone"
                          name="user_phone"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Subject*</label>
                        <input
                          type="text"
                          placeholder="Subject"
                          name="user_subject"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-textarea-box">
                        <label>Message</label>
                        <textarea
                          placeholder="Message"
                          name="user_message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="it-btn" onClick={clearData}>
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
                  <Toaster position="bottom-center" reverseOrder={false} />
                  {/* <ToastContainer autoClose={3000} /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
