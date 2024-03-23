import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Custom hook to handle downloading content as PDF
export const useDownload = () => {
  return (content, count) => {
    // Convert HTML content to canvas
    html2canvas(content, { scale: 2 }).then((canvas) => {
      // Create a new PDF instance
      const pdf = new jsPDF("p", "mm", "a4");
      // Convert canvas to image data
      const imageData = canvas.toDataURL("image/png");

      // Add image data to PDF
      pdf.addImage(imageData, "PNG", 5, 10, 200, 12 * count);
      // Save PDF file
      pdf.save("transactions.pdf");
    });
  };
};
