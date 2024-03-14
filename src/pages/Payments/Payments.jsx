import ContextProvider from "../../context/transactionsContext";
import styles from "./Payments.module.scss";
import { Overview, Transactions, TransactionsHeader } from "./components";

export const Payments = () => {
  return (
    <ContextProvider>
      <div className={styles.container}>
        <Overview />
        <div className={styles.transactions}>
          <div className={styles.heading}>Transactions | This Month</div>
          <div className={styles.body}>
            <div className={styles.bodyHeader}>
              <TransactionsHeader />
            </div>
            <Transactions />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};
