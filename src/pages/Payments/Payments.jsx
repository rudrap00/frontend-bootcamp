import { Overview, Transactions } from "./components";
import styles from "./Payments.module.scss";

export const Payments = () => {
  return (
    <div className={styles.container}>
      <Overview />
      <Transactions />
    </div>
  );
};
