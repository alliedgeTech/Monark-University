import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function CareerForm() {
  const form = useRef();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Update the label to show the file name
      const fileLabel = document.querySelector(".file-upload-label");
      fileLabel.textContent = selectedFile.name;
    } else {
      // Reset the label if no file is chosen
      const fileLabel = document.querySelector(".file-upload-label");
      fileLabel.textContent = "No file chosen";
    }
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      fullname: form.current.user_name.value,
      dob: form.current.user_birthday.value,
      email: form.current.user_email.value,
      phone: form.current.user_phone.value,
      subject: form.current.user_subject.value,
      message: form.current.user_message.value,
      gender: form.current.user_gender.value,
      category: form.current.user_category.value,
      address: form.current.user_address.value,
      city: form.current.user_city.value,
      country: form.current.user_country.value,
      position: form.current.user_position.value,
      faculty: form.current.user_faculty.value,
      tenPercentage: form.current.user_ten.value,
      twelvePercentage: form.current.user_twelve.value,
      // UG Academic Qualification
      ugDegree: form.current.user_ugdegree.value,
      ugUniversity: form.current.user_uguni.value,
      ugPercentage: form.current.user_ugpercenatage.value,
      ugPassingYear: form.current.user_ugpassing.value,
      // PG Academic Qualification
      pgDegree: form.current.user_pgdegree.value,
      pgUniversity: form.current.user_pguni.value,
      pgPercentage: form.current.user_pgpercenatage.value,
      pgPassingYear: form.current.user_pgpassing.value,
      // PHD Research
      phdArea: form.current.user_area.value,
      phdUniversity: form.current.user_phduni.value,
      phdPassingYear: form.current.user_phdpassing.value,
      // Experience
      academicExperience: form.current.user_academic.value,
      industryExperience: form.current.user_industry.value,
      researchExperience: form.current.user_research.value,
      totalExperience: form.current.user_texperience.value,
      // Join Immediately
      joinImmediately: form.current.user_subject.value === "Yes" ? "Yes" : "No",
      noticePeriod: form.current.user_notice.value,
      // Alternate Contact Details
      altPhone: form.current.user_altphone.value,
      altEmail: form.current.user_altemail.value,
    };

    try {
      const response = await fetch(
        "https://monarkuniversitybacked.onrender.com/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully");
        form.current.reset(); // Reset the form on successful submission
      } else {
        toast.error("Failed to submit the form");
        console.error("Failed to send data to API:", response.statusText);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form");
      console.error("Error occurred while sending data:", error);
    }
  };

  return (
    <div className="it-contact__area pt-120 pb-120">
      <div className="container">
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block"></div>
          <div className="it-contact__section-box three pb-20">
            <h1 className="it-contact__title pb-15">Grow With MU</h1>
          </div>
          <div className="row align-items-end">
            <div className="col-xl-6">
              <div className="it-contact__form-box">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Full Name*</label>
                        <input
                          type="text"
                          placeholder="Candidate Full Name"
                          name="user_name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Date of birth*</label>
                        <input
                          type="date"
                          placeholder="Date of birth"
                          name="user_birthday"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Gender*</label>
                        <select name="user_gender" required>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Category*</label>
                        <select name="user_category" required>
                          <option value="sebc">SEBC</option>
                          <option value="general">General</option>
                          <option value="st">ST</option>
                          <option value="sc">SC</option>
                          <option value="obc">OBC</option>
                          <option value="ews">EWS</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          name="user_address"
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-25">
                      <div className="it-contact-input-box">
                        <label>City*</label>
                        <input
                          type="text"
                          placeholder="City"
                          name="user_city"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-25">
                      <div className="it-contact-input-box">
                        <label>Country*</label>
                        <input
                          type="text"
                          placeholder="Country"
                          name="user_country"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Mobile Number*</label>
                        <input
                          type="text"
                          placeholder="Mobile NO>"
                          name="user_phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Position Apply For*</label>
                        <select name="user_position" required>
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
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Faculty*</label>
                        <select name="user_faculty" required>
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
                          <option value="lis">
                            Library & Information Science
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>10th Percentage</label>
                        <input type="text" placeholder="" name="user_ten" />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>12th Percentage</label>
                        <input type="text" placeholder="" name="user_twelve" />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required
                        />
                      </div>
                    </div>
                    <h4>UG Academic Qualification</h4>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Degree*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_ugdegree"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>University/Institute Name*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_uguni"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Percentage/CGPA*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_ugpercenatage"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Year of passing*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_ugpassing"
                          required
                        />
                      </div>
                    </div>
                    <h4>PG Academic Qualification</h4>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Degree*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_pgdegree"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>University/Institute Name*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_pguni"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Percentage/CGPA*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_pgpercenatage"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Year of passing*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_pgpassing"
                          required
                        />
                      </div>
                    </div>
                    <h4>PHD Research</h4>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Area*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_area"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>University/Institute Name*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_phduni"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Year of passing*</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_phdpassing"
                          required
                        />
                      </div>
                    </div>
                    <h4>Experience (In Years)</h4>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Academic</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_academic"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Industry</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_industry"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Research</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_research"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Total Experience</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_texperience"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Can you Join Immediately ?</label>
                        <div>
                          <label>
                            <input
                              type="radio"
                              name="user_subject"
                              value="Yes"
                              required
                            />
                            Yes
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="user_subject"
                              value="No"
                              required
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>If no, mention notice period</label>
                        <input type="text" placeholder="" name="user_notice" />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Alternate Mobile Number</label>
                        <input
                          type="text"
                          placeholder=""
                          name="user_altphone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Alternate Email</label>
                        <input
                          type="text"
                          placeholder="Subject"
                          name="user_altemail"
                          required
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
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Upload PDF*</label>
                        <button type="button" className="it-btn">
                          Choose File
                          <input
                            type="file"
                            accept=".pdf"
                            name="user_pdf"
                            required
                            onChange={handleFileChange}
                          />
                        </button>
                        <span className="file-upload-label">
                          No file chosen
                        </span>
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
                  <Toaster position="bottom-center" reverseOrder={false} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
