import styles from "./Transaction.module.scss";

const Transaction = ({ id, date, amount, fees }) => {
  return (
    <>
      {id.toString().startsWith("") && (
        <div className={styles.container}>
          <div>#{id}</div>
          <div>{date}</div>
          <div>₹{amount.toFixed(2)}</div>
          <div>₹{fees.toFixed(2)}</div>
        </div>
      )}
    </>
  );
};

export default Transaction;
