import { Outlet } from "react-router-dom";
import { HeaderBar } from "../../UI/Header/HeaderBar";
import { Wallet } from "../../assets";
import { routes } from "../constants";
import styles from "./NavBar.module.scss";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navTop}>
          <div className={styles.iconDiv}>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NS-DWb7NG9M6pY5VDbmCkPiUja90lR4tz7-JnXHGknUYUpr4MTDOccXbGqgCtflOknsh5RDmIlQ1KjGp~UaCzlgUB1z4tNxyk2wI65q49CC15ll0s-lUmSOKRKI2uHKh4xNypD8SPJb6Ur0Ld-yFMr3eRpeRftTYxMcngPcm5zYrDT~7ZRSJwD~OVoe--CRrtvtu7aOFe85wfAtvH0Jmwy~IfQReucLRHqSIl4~HXvyN4Scu7zStgM9DHlCgnpwtn~~sUwit7PIWoqdrkzASnpjJaDuAMSrtSPuQnFSKug3HoH-NBjMxfauxjZ64mQdyDcNDQ~xVsWkoCpbdzONaXg__"
                alt="Logo/Icon"
              />
            </div>
            <div>
              <div>Nishyan</div>
              <div>
                <a href=".">Visit Store</a>
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined">expand_more</span>
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
              <img src={Wallet} alt="" />
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
        <Outlet />
      </div>
    </>
  );
};
