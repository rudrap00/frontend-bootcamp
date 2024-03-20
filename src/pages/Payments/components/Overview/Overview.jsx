import React, { useContext } from "react";
import { transactionsContext } from "../../../../context/transactionsContext";
import { options } from "../constants";
import styles from "./Overview.module.scss";

const Overview = () => {
  const { dispatch } = useContext(transactionsContext);
  const timeChangeHandler = (e) => {
    dispatch({ type: "time", payload: e.target.value });
  };
  return (
    <div className={styles.overview}>
      <div className={styles.overviewHead}>
        <div>Overview</div>
        <div>
          <select defaultValue="Today" onChange={timeChangeHandler}>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.overviewBody}>
        <div className={styles.leftBody}>
          <div>Online Orders</div>
          <div>231</div>
        </div>
        <div className={styles.rightBody}>
          <div>Amount received</div>
          <div>₹23,92,312.19</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
