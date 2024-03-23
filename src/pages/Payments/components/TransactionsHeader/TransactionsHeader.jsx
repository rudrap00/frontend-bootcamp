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

// TransactionsHeader component
const TransactionsHeader = ({ pdfDownload }) => {
  // Access transactions context
  const { dispatch } = useContext(transactionsContext);

  // Handler for search input
  const searchHandler = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  // Handler for sort button
  const sortHandler = () => {
    dispatch({ type: "sort" });
  };

  // Render component
  return (
    <>
      <div className={styles.tableFunc}>
        {/* Search bar */}
        <div className={styles.search}>
          <img src={searchIcon} alt="" />
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Search by order ID"
          />
        </div>
        {/* Sort and download buttons */}
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
      {/* Table header */}
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
