import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ApplyForm() {
  const form = useRef();
  const clearData = () => {
    toast.success("Form submitted Successfully!");
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      gender: form.current.user_gender.value,
      phone: form.current.user_phone.value,
      state: form.current.user_state.value,
      city: form.current.user_city.value,
      graduation: form.current.user_graduation.value,
      course: form.current.user_course.value,
      qualification: form.current.user_qualification.value,
    };

    try {
      // Send data to your custom API
      const response = await fetch(
        "https://monarkuniversitybacked.onrender.com/enquiry",
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

    // Send email to client
  };

  return (
    <div className="it-contact__area pt-120 pb-120">
      <div className="container">
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block"></div>
          <div className="it-contact__section-box three pb-20">
            <h1 className="it-contact__title pb-15">Application Form</h1>
          </div>
          <div className="it-contact__form-box">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-6 mb-25">
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
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Email*</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="user_email"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Phone*</label>
                    <input
                      type="number"
                      placeholder="Phone"
                      name="user_phone"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>State*</label>
                    <input
                      type="text"
                      placeholder="State"
                      name="user_state"
                      required="true"
                    />
                  </div>
                </div>

                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>City*</label>
                    <input type="text" placeholder="City" name="user_city" />
                  </div>
                </div>
           

                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Gender*</label>
                    <select name="user_gender" required="true">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                     
                    </select>
                  </div>
                </div>

                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Qualification*</label>
                    <select name="user_qualification" required="true">
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="diploma">Diploma or Certificate</option>
                      <option value="graduation">Graduation</option>
                      <option value="post_graduation">Post Graduation</option>
                      <option value="phd">Phd</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Course Interested in*</label>
                    <select name="user_course">
                      <option value="be">Bachelor of Engineering(BA)</option>
                      <option value="bsc">Bachelor of Science(BSC)</option>
                      <option value="cloud">
                        (B.Sc. + M.Sc.)IT IMS & Cloud Technology
                      </option>
                      <option value="cyber">
                        (B.Sc. + M.Sc.)IT Cyber Security & Digital Forensics
                      </option>
                      <option value="animation_vfx_game">
                        (B.Sc. + M.Sc.)IT Animation,VFX and Game Design
                      </option>
                      <option value="software_mobile">
                        (B.Sc. + M.Sc.)IT Software & Mobile Application
                        Development
                      </option>
                      <option value="bba">
                        Bachelor of Bussines Administration(BBA)
                      </option>
                      <option value="nursing">
                        Bachelor of Science in nursing
                      </option>
                      <option value="physiotherapy">
                        Bachelor of Physiotherapy(BPT)
                      </option>
                      <option value="bcom">Bachelor of Commerce(B.com)</option>
                      <option value="diploma_commerce">
                        Diploma in Commerce
                      </option>
                      <option value="llb">Bachelor of Law(LL.B.)</option>
                      <option value="bca">
                        Bachelor of Computer Application(BCA)
                      </option>
                      <option value="ba">Bachelor of Arts(B.A.)</option>
                      <option value="bsw">Bachelor of Social Wokr(BSW)</option>
                    </select>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
