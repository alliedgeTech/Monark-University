import React, { useEffect, useRef } from 'react';
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from 'pdfjs-dist/webpack';
import page1 from "../../../public/img/pdf/p1.pdf";
import page2 from "../../../public/img/pdf/p2.pdf";
import page3 from "../../../public/img/pdf/p3.pdf";
import page4 from "../../../public/img/pdf/p4.pdf";
import styles from "../../../styles/Flipbook.module.css"; // Adjust the path as necessary

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const renderPDFPage = (pdfUrl, pageNumber, canvas) => {
  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    pdf.getPage(pageNumber).then(page => {
      const viewport = page.getViewport({ scale: 1 });
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });
};

const Index = () => {
  const canvasRefs = useRef([]);

  const pdfFiles = [page1, page2, page3, page4];

  useEffect(() => {
    pdfFiles.forEach((pdfFile, index) => {
      const canvas = canvasRefs.current[index];
      if (canvas) {
        renderPDFPage(pdfFile, 1, canvas);
      }
    });
  }, []);

  return (
    <div className="container" style={{marginTop:'75px'}}>
      <HTMLFlipBook className="" height={400} width={400}>
        {pdfFiles.map((_, index) => (
          <div key={index} className="">
            <canvas ref={el => canvasRefs.current[index] = el} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Index;
