import { Worker } from '@react-pdf-viewer/core';
import Highlights from './highlight/Highlight';

export default function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <Highlights  />
    </Worker>
  );
}
