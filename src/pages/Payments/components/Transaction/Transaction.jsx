import { useFormatDate } from "../../../../hooks/useFormatDate";
import styles from "./Transaction.module.scss";

// Transaction component
const Transaction = ({ id, date, amount, fees }) => {
  // Format date using custom hook
  const { day, month, year } = useFormatDate(date);

  // Render component
  return (
    <>
      <div className={styles.container}>
        <div>#{id}</div>
        <div>{`${day < 10 ? "0" : ""}${day} ${month}, ${year}`}</div>
        <div>₹{amount.toFixed(2)}</div>
        <div>₹{fees.toFixed(2)}</div>
      </div>
    </>
  );
};

export default Transaction;
