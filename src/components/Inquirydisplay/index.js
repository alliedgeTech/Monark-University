import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function InquiryForm() {
  const form = useRef();
  const clearData = () => {

    toast.success('Form submitted Successfully!');

    
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
        name: form.current.user_name.value,
      email: form.current.user_email.value,
      phone: form.current.user_phone.value,
      state: form.current.user_state.value,
      city: form.current.user_city.value,
      graduation: form.current.user_graduation.value,
      programs: form.current.user_programs.value,
      specialization: form.current.user_specialization.value,
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
            <h1 className="it-contact__title pb-15">Inquiry</h1>
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
                    <label>Graduation*</label>
                    <input type="text" placeholder="" name="user_graduation" />
                  </div>
                </div>
             

                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>programmes*</label>
                    <select name="user_programs" required="true">
                      <option value="proffesor">Proffesor</option>
                      <option value="assistant_proffesor">
                        Assistant Proffesor
                      </option>
                      <option value="hod">HOD</option>
                      <option value="nursing_tutors">Nursing Tutors</option>
                      <option value="tutors">Tutors</option>
                      <option value="lecturer">Lecturer</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Specialization*</label>
                    <select name="user_specialization">
                      <option value="eng">Engineering & Technology</option>
                      <option value="management">Management</option>
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                      <option value="law">Law</option>
                      <option value="ca">Computer Application</option>
                      <option value="education">Education</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="nursing">Nursing</option>
                      <option value="social_work">Social Work</option>
                      <option value="design">Design</option>
                      <option value="msdtc">
                        Multi Skill Development & Training Centre
                      </option>
                      <option value="ayurveda">Ayurveda</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="homeopathy">Homeopathy</option>
                      <option value="ict">
                        Information & Communication Technology
                      </option>
                      <option value="lis">Library & Information Science</option>
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
