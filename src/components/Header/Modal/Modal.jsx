import styles from "./Modal.module.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => closeModal(false)}
      >
        <FaTimes size={20} color="white" />
      </button>

      <div className={styles.navigation}>
        <NavLink to="/" className={styles.link} onClick={() => closeModal(false)}>
          Web
        </NavLink>
        <NavLink to="/comments" className={styles.link} onClick={() => closeModal(false)}>
          Comments
        </NavLink>
        <NavLink to="/about" className={styles.link} onClick={() => closeModal(false)}>
          About
        </NavLink>
        <NavLink to="/contact" className={styles.link} onClick={() => closeModal(false)}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Modal;
