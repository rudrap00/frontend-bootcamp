import { useLocation } from "react-router-dom";
import { Group, Help, Polygon, searchIcon } from "../../assets";
import styles from "./HeaderBar.module.scss";

export const HeaderBar = () => {
  const location = useLocation();
  const path = location.pathname.replaceAll("/", "");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.head}>
          <div className={styles.heading}>
            {path === "frontend-bootcamp" ? "Home" : path}
          </div>
          {path === "Payments" && (
            <div className={styles.info}>
              <img src={Help} alt="" />
              <p>How it works</p>
            </div>
          )}
        </div>
        <div className={`${styles.search} disabled`}>
          <div>
            <img src={searchIcon} alt="" />
          </div>
          <input
            className="disabled"
            disabled={true}
            type="text"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        <div className={styles.menu}>
          <div className="disabled">
            <img src={Polygon} alt="" />
          </div>
          <div className="disabled">
            <img src={Group} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
