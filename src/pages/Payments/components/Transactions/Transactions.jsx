import { useContext } from "react";
import { nextIcon, previousIcon } from "../../../../assets";
import { transactionsContext } from "../../../../context/transactionsContext";
import usePagination from "../../../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import Transaction from "../Transaction/Transaction";
import styles from "./Transactions.module.scss";

// Transactions component
const Transactions = ({ tableRef }) => {
  // Access transactions context
  const { state } = useContext(transactionsContext);

  // Pagination hook to manage data pagination
  const [
    arr,
    pages,
    nextHandler,
    previousHandler,
    currentPage,
    setCurrentPage,
  ] = usePagination(state.data, 10);

  // Render component
  return (
    <div className={styles.pageContainer}>
      <div ref={tableRef} className={styles.container}>
        {/* Render transactions */}
        {arr.length > 0 &&
          arr.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
      </div>
      {/* Pagination section */}
      <div className={styles.pagination}>
        <div className={styles.pageButtons}>
          {/* Previous button */}
          <button
            className={styles.button}
            onClick={previousHandler}
            disabled={currentPage === 1 || pages.length === 0}
          >
            <div>
              <img src={previousIcon} alt="previousButton" />
              Previous
            </div>
          </button>
          {/* Pagination buttons */}
          <div>
            {pages.map((page) => (
              <Pagination
                key={page}
                page={page}
                isActive={page === currentPage}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </div>
          {/* Next button */}
          <button
            className={styles.button}
            onClick={nextHandler}
            disabled={currentPage === pages.length || pages.length === 0}
          >
            <div>
              Next
              <img src={nextIcon} alt="nextButton" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
