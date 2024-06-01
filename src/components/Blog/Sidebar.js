import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import studentclubdata from '@/data/studentclub';

export default function Sidebar() {
	console.log("data",studentclubdata)
  return (
    <div className="container">
      <Accordion className="accordian">
        {studentclubdata?.map((student, i) => (
          <AccordionItem key={i} >
			{console.log("yug",student)}
            <div className="it-gallery-title-box text-center pb-70">
              <span className="it-section-subtitle-5">
                <i className="fa-light fa-book"></i>
				{console.log("std",student.clubh)}
                {student.clubh}
                <i className="fa-light fa-book"></i>
              </span>
              <h2 className="it-section-title-3 bg-black">{student?.club}</h2>
            </div>
            <div className="it-faq-area p-relative pt-120 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="it-faq-wrap">
                      <div className="it-custom-accordion it-custom-accordion-style-3">
                        <h2>{student.club}</h2>
                        {/* Render other details like content, header, etc. */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}