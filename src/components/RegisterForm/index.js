import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function InquiryForm() {
  const form = useRef();

  const clearData = () => {
    form.current.reset(); // Reset form fields
    toast.success('Form submitted successfully!');
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.current.user_name.value);
    formData.append('department', form.current.user_department.value);
    formData.append('sem', form.current.user_sem.value);
    formData.append('percentage', form.current.user_percentage.value);
    formData.append('resume', form.current.user_file.files[0]); // handling file upload

    try {
      const response = await fetch(
        "https://monarkuniversitybacked.onrender.com/Registra",
        {
          method: "POST",
          body: formData, // sending FormData
        }
      );

      if (response.ok) {
        console.log("Data sent to API successfully!");
        clearData(); // Call clearData() here after successful submission
      } else {
        console.error("Failed to send data to API:", response.statusText);
        toast.error('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error("Error occurred while sending data:", error);
      toast.error('Error occurred while submitting form. Please try again.');
    }
  };

  return (
    <div className="it-contact__area pt-120 pb-120">
      <div className="container">
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block"></div>
          <div className="it-contact__section-box three pb-20">
            <h1 className="it-contact__title pb-15">Career</h1>
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
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Department*</label>
                    <input
                      type="text"
                      placeholder="Department"
                      name="user_department"
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Sem*</label>
                    <input
                      type="text"
                      placeholder="Semester"
                      name="user_sem"
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Percentage*</label>
                    <input
                      type="text"
                      placeholder="Percentage"
                      name="user_percentage"
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Upload Resume*</label>
                    <input className="file-cv" type="file" name="user_file" required />
                  </div>
                </div>
              </div>

              <button type="submit" className="it-btn">
                <span>
                  Register
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