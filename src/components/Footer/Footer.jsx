import styles from "./Footer.module.css";
import { useState } from "react";
import { db } from "../FireBase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";
import { serverTimestamp } from "firebase/firestore";

const Footer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addComments = async (e) => {
    e.preventDefault();

    if (!name || !message) return;

    await addDoc(collection(db, "messages"), {
      name,
      message,
      createdAt: serverTimestamp(),
    });

    setName("");
    setMessage("");
  };

  return (
    <footer>
      <h2 className={styles.logo}>
        Dmitriy <span className={styles.logoSec}>Savin</span>
      </h2>
      <form>
        <label>
          <input
            type="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <textarea
            name="message"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => addComments(e)}>
          Send message
        </button>
      </form>
    </footer>
  );
};

export default Footer;
