import React, { useState } from 'react';
import './App.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from './A1.pdf';
function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="App">
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
export default App;