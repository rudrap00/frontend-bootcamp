import { useContext } from "react";
import { transactionsContext } from "../../../../context/transactionsContext";
import usePagination from "../../../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import Transaction from "../Transaction/Transaction";
import styles from "./Transactions.module.scss";

const Transactions = () => {
  const { state } = useContext(transactionsContext);
  const [arr, pages, currentPage, setCurrentPage] = usePagination(
    state.data,
    10
  );

  const nextHandler = () => {
    if (currentPage < pages.length) {
      setCurrentPage((curr) => curr + 1);
    }
  };

  const previousHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((curr) => curr - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {arr.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
      <div className={styles.pagination}>
        <div className={styles.pageButtons}>
          <button className={styles.button} onClick={previousHandler}>
            Previous
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
          <button className={styles.button} onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Transactions;
