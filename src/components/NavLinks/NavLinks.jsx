import { NavLink } from "react-router-dom";
import { useIcon } from "../../hooks/useIcon";
import styles from "./NavLinks.module.scss";

export const NavLinks = ({ route }) => {
  const icon = useIcon(route);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.link + " " + styles.active : styles.link
        }
        to={route === "Home" ? "/" : route}
      >
        <div className={styles.navDiv}>
          <div>
            <img src={icon} alt="" />
          </div>
          {route}
        </div>
      </NavLink>
    </>
  );
};
