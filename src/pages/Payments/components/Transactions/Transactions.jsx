import { useContext } from "react";
import { nextIcon, previousIcon } from "../../../../assets";
import { transactionsContext } from "../../../../context/transactionsContext";
import usePagination from "../../../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import Transaction from "../Transaction/Transaction";
import styles from "./Transactions.module.scss";

const Transactions = ({ tableRef }) => {
  const { state } = useContext(transactionsContext);
  const [arr, pages, currentPage, setCurrentPage] = usePagination(
    state.data,
    10
  );

  if (pages.length > 0 && currentPage > pages.length) {
    setCurrentPage(pages.length);
  }

  const nextHandler = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const previousHandler = () => {
    setCurrentPage((curr) => curr - 1);
  };

  return (
    <div className={styles.pageContainer}>
      <div ref={tableRef} className={styles.container}>
        {arr.length > 0 &&
          arr.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
      </div>
      <div className={styles.pagination}>
        <div className={styles.pageButtons}>
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
