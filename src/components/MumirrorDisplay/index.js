// import React, { useEffect, useRef, useState } from 'react';
// import HTMLFlipBook from "react-pageflip";
// import * as pdfjsLib from 'pdfjs-dist/webpack';
// import page1 from "../../../public/img/pdf/p1.pdf";
// import page2 from "../../../public/img/pdf/p2.pdf";
// import page3 from "../../../public/img/pdf/p3.pdf";
// import page4 from "../../../public/img/pdf/p4.pdf";

// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// const renderPDFPage = (pdfUrl, pageNumber, canvas) => {
//   return pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
//     return pdf.getPage(pageNumber).then(page => {
//       const viewport = page.getViewport({ scale: 1 });
//       const context = canvas.getContext('2d');
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport,
//       };
//       return page.render(renderContext).promise;
//     });
//   });
// };

// const Index = () => {
//   const canvasRefs = useRef([]);
//   const [pdfLoaded, setPdfLoaded] = useState(false);

//   const pdfFiles = [page1, page2, page3, page4];

//   useEffect(() => {
//     const renderAllPDFPages = async () => {
//       const renderPromises = pdfFiles.map(async (pdfFile, index) => {
//         const canvas = canvasRefs.current[index];
//         if (canvas) {
//           await renderPDFPage(pdfFile, 1, canvas);
//         }
//       });
      
//       await Promise.all(renderPromises);
//       setPdfLoaded(true);
//     };

//     renderAllPDFPages();
//   }, []);

//   return (
//     <div className="container" style={{ marginTop: '75px' }}>
//       {pdfLoaded && (
//         <HTMLFlipBook className="" height={400} width={400}>
//           {pdfFiles.map((_, index) => (
//             <div key={index} className="">
//               <canvas ref={el => canvasRefs.current[index] = el} />
//             </div>
//           ))}
//         </HTMLFlipBook>
//       )}
//     </div>
//   );
// };

// export default Index;
import React from 'react'

const index = () => {
  return (
    <div className='mt-80'>
      <h1>mu mirror</h1>
    </div>
  )
}

export default index

