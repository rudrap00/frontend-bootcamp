import React from "react";
import {
  Polygon,
  downloadIcon,
  infoIcon,
  searchIcon,
  sortIcon,
} from "../../../../assets";
import styles from "./Transactions.module.scss";

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <div className={styles.heading}>Transactions | This Month</div>
      <div className={styles.body}>
        <div className={styles.bodyHeader}>
          <div className={styles.tableFunc}>
            <div className={styles.search}>
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Search by order ID" />
            </div>
            <div className={styles.buttons}>
              <div>
                <button>
                  Sort <img src={sortIcon} alt="" />
                </button>
              </div>
              <div>
                <button>
                  <img src={downloadIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.tableHeader}>
            <div>Order ID</div>
            <div>
              Order date <img src={Polygon} alt="" />
            </div>
            <div>Order amount</div>
            <div>
              Transaction Fees <img src={infoIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
