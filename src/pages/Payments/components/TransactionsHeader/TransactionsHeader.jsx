import { useContext } from "react";
import {
  Polygon,
  downloadIcon,
  infoIcon,
  searchIcon,
  sortIcon,
} from "../../../../assets";
import { transactionsContext } from "../../../../context/transactionsContext";
import styles from "./TransactionsHeader.module.scss";

const TransactionsHeader = ({ pdfDownload }) => {
  const { dispatch } = useContext(transactionsContext);

  const searchHandler = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  const sortHandler = () => {
    dispatch({ type: "sort" });
  };

  return (
    <>
      <div className={styles.tableFunc}>
        <div className={styles.search}>
          <img src={searchIcon} alt="" />
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Search by order ID"
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <button onClick={sortHandler}>
              Sort <img src={sortIcon} alt="" />
            </button>
          </div>
          <div>
            <button>
              <img onClick={pdfDownload} src={downloadIcon} alt="" />
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
    </>
  );
};

export default TransactionsHeader;
