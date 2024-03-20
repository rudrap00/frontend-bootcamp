import { useFormatDate } from "../../../../hooks/useFormatDate";
import styles from "./Transaction.module.scss";

const Transaction = ({ id, date, amount, fees }) => {
  const { day, month, year } = useFormatDate(date);

  return (
    <>
      {id.toString().startsWith("") && (
        <div className={styles.container}>
          <div>#{id}</div>
          <div>{`${day < 10 ? "0" : ""}${day} ${month}, ${year}`}</div>
          <div>₹{amount.toFixed(2)}</div>
          <div>₹{fees.toFixed(2)}</div>
        </div>
      )}
    </>
  );
};

export default Transaction;
