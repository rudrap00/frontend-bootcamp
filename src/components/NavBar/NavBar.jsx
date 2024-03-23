import { Outlet } from "react-router-dom";
import { HeaderBar } from "../../UI/Header/HeaderBar";
import { Logo, dropDown, walletIcon } from "../../assets";
import { NavLinks } from "../NavLinks/NavLinks";
import { routes } from "../constants";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navTop}>
          <div className={styles.iconDiv}>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <div>Nishyan</div>
              <div className="disabled">
                <a href="*">Visit Store</a>
              </div>
            </div>
            <div>
              <img src={dropDown} alt="" />
            </div>
          </div>
          <div className={styles.pages}>
            {routes.map((route) => (
              <NavLinks key={route} route={route} />
            ))}
          </div>
        </div>
        <div className={styles.navBottom}>
          <div className={styles.wrapper}>
            <div className={styles.bottomIcon}>
              <img src={walletIcon} alt="" />
            </div>
            <div className={styles.credit}>
              <div>Available Credits</div>
              <div>222.10</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <HeaderBar />
        <div className={styles.page}>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
