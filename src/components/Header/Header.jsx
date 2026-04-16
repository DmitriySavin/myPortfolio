import styles from "./Header.module.css";
import { NavLink, Link} from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  
  const closeModal = (close) => {
    setIsOpen(close)
  }

  return (
    <header className={styles.header}>
      {isOpen && <Modal closeModal={closeModal} />}

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

      <Link to="/" className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </Link>

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
      <button type="button" className={styles.burger} onClick={openModal}>
        <FaAlignJustify color="white" size={20} />
      </button>
    </header>
  );
};

export default Header;
