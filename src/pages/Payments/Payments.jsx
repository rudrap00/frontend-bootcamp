import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useContext, useRef } from "react";
import { transactionsContext } from "../../context/transactionsContext";
import styles from "./Payments.module.scss";
import { Overview, Transactions, TransactionsHeader } from "./components";

const Payments = () => {
  const { state } = useContext(transactionsContext);

  const tableRef = useRef();

  const pdfDownloadHandler = () => {
    const content = tableRef.current;
    const count = content.childElementCount;

    html2canvas(content, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imageData = canvas.toDataURL("image/png");

      pdf.addImage(imageData, "PNG", 5, 10, 200, 12 * count);
      pdf.save("transactions.pdf");
    });
  };

  return (
    <div className={styles.container}>
      <Overview />
      <div className={styles.transactions}>
        <div
          className={styles.heading}
        >{`Transactions | ${state.timeWindow}`}</div>
        <div className={styles.body}>
          <div className={styles.bodyHeader}>
            <TransactionsHeader pdfDownload={pdfDownloadHandler} />
          </div>
          <Transactions tableRef={tableRef} />
        </div>
      </div>
    </div>
  );
};

export default Payments;
