import styles from "./Footer.module.css";
// import { useState } from "react";
// import { db } from "../FireBase/firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { nanoid } from "nanoid";


const Footer = () => {


  return (
    <footer>
      <h2 className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </h2>
     
    </footer>
  );
};

export default Footer;
