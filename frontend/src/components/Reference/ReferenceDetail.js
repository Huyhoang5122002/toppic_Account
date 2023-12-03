
import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import pdf from '../../assets/pdf/report.pdf'
function ReferenceDetail() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false}  renderAnnotationLayer/>
      </Document>
      <p>Page {pageNumber} of {numPages}</p> */}
    </div>
  );
}
export default ReferenceDetail;
