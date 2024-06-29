import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function CareerForm() {
  const form = useRef();
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     // Update the label to show the file name
  //     const fileLabel = document.querySelector(".file-upload-label");
  //     fileLabel.textContent = selectedFile.name;
  //   } else {
  //     // Reset the label if no file is chosen
  //     const fileLabel = document.querySelector(".file-upload-label");
  //     fileLabel.textContent = "No file chosen";
  //   }
  // };
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullName", form.current.user_name.value);
    formData.append("dateOfBirth", form.current.user_birthday.value);
    formData.append("gender", form.current.user_gender.value);
    formData.append("category", form.current.user_category.value);
    formData.append("address", form.current.user_address.value);
    formData.append("city", form.current.user_city.value);
    formData.append("state", form.current.user_state.value);
    formData.append("postalCode", form.current.user_postal.value);
    formData.append("country", form.current.user_country.value);
    formData.append("phone", form.current.user_phone.value);
    formData.append("email", form.current.user_email.value);
    formData.append("positionApplyFor", form.current.user_position.value);
    formData.append("faculty", form.current.user_faculty.value);
    formData.append("tenthPercentage", form.current.user_ten.value);
    formData.append("twelfthPercentage", form.current.user_twelve.value);
    formData.append("ugDegree", form.current.user_ugdegree.value);
    formData.append("ugUniversityName", form.current.user_uguni.value);
    formData.append("ugCGPA", form.current.user_ugpercenatage.value);
    formData.append("ugYearOfPassing", form.current.user_ugpassing.value);
    formData.append("pgDegree", form.current.user_pgdegree.value);
    formData.append("pgUniversityName", form.current.user_pguni.value);
    formData.append("pgCGPA", form.current.user_pgpercenatage.value);
    formData.append("pgYearOfPassing", form.current.user_pgpassing.value);
    formData.append("phdDegree", form.current.user_area.value);
    formData.append("phdUniversityName", form.current.user_phduni.value);
    formData.append("phdCGPA", form.current.user_phdcgpa.value);
    formData.append("phdYearOfPassing", form.current.user_phdpassing.value);

    formData.append("academicExperience", form.current.user_academic.value);
    formData.append("industryExperience", form.current.user_industry.value);
    formData.append("researchExperience", form.current.user_research.value);
    formData.append("totalExperience", form.current.user_texperience.value);
    formData.append("canJoinImmediately", form.current.user_joining.value);
    formData.append("noticePeriod", form.current.user_notice.value);
    formData.append("alternateMobileNo", form.current.user_altphone.value);
    formData.append("alternateEmail", form.current.user_altemail.value);

    const fileInput = form.current.querySelector('input[type="file"]');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append("resumeUrl", fileInput.files[0]);
    }

    try {
      const response = await fetch(
        "https://monarkuniversitybacked.onrender.com/applications",
        {
          method: "POST",
          body: formData,
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
          <div className="it-contact__form-box">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Full Name*</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="user_name"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Date of birth*</label>
                    <input
                      type="date"
                      placeholder="Date of birth"
                      name="user_birthday"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Gender*</label>
                    <select name="user_gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Category*</label>
                    <select name="user_category">
                      <option value="sebc">SEBC</option>
                      <option value="general">General</option>
                      <option value="st">ST</option>
                      <option value="sc">SC</option>
                      <option value="obc">OBC</option>
                      <option value="ews">EWS</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 mb-25">
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
                    <input type="text" placeholder="City" name="user_city" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Postal Code*</label>
                    <input
                      type="text"
                      placeholder="Postal Code"
                      name="user_postal"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>State*</label>
                    <input type="text" placeholder="State" name="user_state" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Country*</label>
                    <input
                      type="text"
                      placeholder="Country"
                      name="user_country"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Mobile Number*</label>
                    <input
                      type="text"
                      placeholder="Mobile NO>"
                      name="user_phone"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Position Apply For*</label>
                    <select name="user_position" required="true">
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
                    <label>Faculty*</label>
                    <select name="user_faculty">
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
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>10th Percentage</label>
                    <input type="number" placeholder="" name="user_ten" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>12th Percentage</label>
                    <input type="number" placeholder="" name="user_twelve" />
                  </div>
                </div>
                <div className="col-6 mb-25">
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
                <h4>UG Academic Qualification</h4>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Degree*</label>
                    <input
                      type="text"
                      placeholder=""
                      name="user_ugdegree"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>University/Institute Name*</label>
                    <input
                      type="text"
                      placeholder=""
                      name="user_uguni"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Percentage/CGPA*</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_ugpercenatage"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Year of passing*</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_ugpassing"
                      required="true"
                    />
                  </div>
                </div>
                <h4>PG Academic Qualification</h4>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Degree*</label>
                    <input
                      type="text"
                      placeholder=""
                      name="user_pgdegree"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>University/Institute Name*</label>
                    <input
                      type="text"
                      placeholder=""
                      name="user_pguni"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Percentage/CGPA*</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_pgpercenatage"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Year of passing*</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_pgpassing"
                      required="true"
                    />
                  </div>
                </div>
                <h4>PHD Research</h4>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Area*</label>
                    <input type="text" placeholder="" name="user_area" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>University/Institute Name*</label>
                    <input type="text" placeholder="" name="user_phduni" />
                  </div>
                </div>

                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Year of passing*</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_phdpassing"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>CGPA*</label>
                    <input type="number" placeholder="" name="user_phdcgpa" />
                  </div>
                </div>
                <h4>Experience (In Years)</h4>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Academic</label>
                    <input type="number" placeholder="" name="user_academic" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Industry</label>
                    <input type="number" placeholder="" name="user_industry" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Research</label>
                    <input type="number" placeholder="" name="user_research" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Total Experience</label>
                    <input
                      type="number"
                      placeholder=""
                      name="user_texperience"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Can you Join Immediately ?</label>
                    <div>
                      <label>
                        <input type="radio" name="user_joining" value="Yes" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" name="user_joining" value="No" />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>If no, mention notice period</label>
                    <input type="text" placeholder="" name="user_notice" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Alternate Mobile Number</label>
                    <input type="text" placeholder="" name="user_altphone" />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Alternate Email</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="user_altemail"
                    />
                  </div>
                </div>
                <div className="col-6 mb-25">
                  <div className="it-contact-input-box">
                    <label>Subject*</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="user_subject"
                    />
                  </div>
                </div>

                <div className="col-12 mb-25">
                  <div className="it-contact-input-box">
                    <label>Upload PDF*</label>
                    <label className="it-btn">
                      Choose File
                      <input
                        type="file"
                        accept=".pdf"
                        name="resumeUrl"
                        required="true"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="file-upload-label">{fileName}</span>
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
  );
}
