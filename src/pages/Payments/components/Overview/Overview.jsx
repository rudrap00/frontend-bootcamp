import React from "react";
import styles from "./Overview.module.scss";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewHead}>
        <div>Overview</div>
        <div>
          <select name="" id="">
            <option value="">Last Month</option>
            <option value="">Last Week</option>
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
