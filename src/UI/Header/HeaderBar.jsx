import { useLocation } from "react-router-dom";
import { Group, Help, Polygon } from "../../assets";
import styles from "./HeaderBar.module.scss";

export const HeaderBar = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.head}>
          <div className={styles.heading}>{path === "" ? "Home" : path}</div>
          <div className={styles.info}>
            <img src={Help} alt="" />
            <p>How it works</p>
          </div>
        </div>
        <div className={styles.search}>
          <input
            disabled={true}
            type="text"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        <div className={styles.menu}>
          <div>
            <img src={Polygon} alt="" />
          </div>
          <div>
            <img src={Group} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
