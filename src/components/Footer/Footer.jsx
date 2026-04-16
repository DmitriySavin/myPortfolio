import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </h2>

      <p className={styles.cta}>
        Let’s work together
      </p>

      <div className={styles.links}>
        <a href="https://www.facebook.com/profile.php?id=100079954544425">FaceBook</a>
        <a href="https://t.me/diiiimsyyyy" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a href="https://github.com/DmitriySavin" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p className={styles.status}>
        Available for freelance work
      </p>
    </footer>
  );
};

export default Footer;