import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
//
const NavBar = ({ routes }) => {
  return (
    <div className={styles.NavBar}>
      {routes.map(route =>
        <NavLink
          className={styles.Link}
          key={route.path}
          to={route.path}>
          {route.name}
        </NavLink>
      )}
    </div>
  );
};

export default NavBar