import React from "react";
import { useRouter } from "next/router";

import syllabusdata from "@/data/syllabus";

import "bootstrap/dist/css/bootstrap.min.css";

const Syllabusdetails = () => {
  const router = useRouter();

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  // Filter the data to include only the 1st and 4th IDs
  const filteredData = syllabusdata.filter((item, index) => index === 0 || index === 3);

  return (
    <div>
      <div className="container">
        <div className="mt-5" id="syllabus">
          <h2
            className="text-center mb-4"
            style={{ fontSize: '24px' }}
          >
            Teaching scheme & Syllabus
          </h2>
          <div className="accordion" id="accordionExample">
            {syllabusdata.map((sl, index) => (
              <div className="accordion-item" key={sl.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {sl.branch}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col">
                        {sl.subbranch.map((sub, subIndex) => (
                          <div className="accordion" key={sub.id}>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse${index}-${subIndex}`}
                                  aria-expanded="true"
                                  aria-controls={`collapse${index}-${subIndex}`}
                                >
                                  {sub.name}
                                </button>
                              </h2>
                              <div
                                id={`collapse${index}-${subIndex}`}
                                className="accordion-collapse collapse show"
                                data-bs-parent={`#accordionExample`}
                              >
                                <div className="accordion-body">
                                  {sub.sub && (
                                    <table className="table">
                                      <tbody>
                                        {sub.sub.map((subsub) => (
                                          <tr key={subsub.id}>
                                            <td>
                                              <a
                                                href={`/showsyllabus?id=${sl.id}&branchId=${sub.id}&subId=${subsub.id}`}
                                              >
                                                {subsub.name}
                                              </a>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabusdetails;