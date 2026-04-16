import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Web
        </NavLink>
        <NavLink
          to="/comments"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Comments
        </NavLink>
        {/* <Link></Link> */}
      </ul>

      <h2 className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </h2>

      <ul className={styles.nav}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Contact
        </NavLink>
        {/* <Link></Link> */}
      </ul>
    </header>
  );
};

export default Header;
