import { useContext, useRef } from "react";
import { transactionsContext } from "../../context/transactionsContext";
import { useDownload } from "../../hooks/useDownload";
import styles from "./Payments.module.scss";
import { Overview, Transactions, TransactionsHeader } from "./components";

// Payments component
const Payments = () => {
  // Access transactions context
  const { state } = useContext(transactionsContext);
  // Custom hook for downloading PDF
  const downloadPdf = useDownload();

  // Ref for table element
  const tableRef = useRef();

  // Handler for PDF download
  const pdfDownloadHandler = () => {
    const content = tableRef.current;
    const count = content.childElementCount;

    downloadPdf(content, count);
  };

  // Render component
  return (
    <div className={styles.container}>
      {/* Render overview section */}
      <Overview />
      <div className={styles.transactions}>
        <div
          className={styles.heading}
        >{`Transactions | ${state.timeWindow}`}</div>
        <div className={styles.body}>
          {/* Render transactions header */}
          <div className={styles.bodyHeader}>
            <TransactionsHeader pdfDownload={pdfDownloadHandler} />
          </div>
          {/* Render transactions */}
          <Transactions tableRef={tableRef} />
        </div>
      </div>
    </div>
  );
};

export default Payments;
