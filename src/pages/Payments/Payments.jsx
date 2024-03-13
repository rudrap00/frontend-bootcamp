import { useReducer } from "react";
import { transactionsContext } from "../../context/transactionsContext";
import styles from "./Payments.module.scss";
import {
  Overview,
  Transactions,
  TransactionsHeader,
  initialState,
  reducer,
} from "./components";

export const Payments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <transactionsContext.Provider value={{ state, dispatch }}>
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
    </transactionsContext.Provider>
  );
};
