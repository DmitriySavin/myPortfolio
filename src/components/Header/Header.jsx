import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <Link to="/" className={styles.link}>Web</Link>
        <Link to="/comments" className={styles.link}>Comments</Link>
        {/* <Link></Link> */}
      </ul>

      <h2 className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </h2>

      <ul className={styles.nav}>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        {/* <Link></Link> */}
      </ul>
    </header>
  );
};

export default Header;
