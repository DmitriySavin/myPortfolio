import styles from "./Contact.module.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/firebase";
import { serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "MessageFromContact"), {
      name,
      message,
      createdAt: serverTimestamp(),
    });

    setName("");
    setMessage("");
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Let’s work together</h2>

      <p className={styles.subtitle}>
        Feel free to contact me for freelance projects or collaboration.
      </p>

      <form onSubmit={(e) => addMessage(e)} className={styles.form}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />

        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send message</button>
      </form>

      <div className={styles.links}>
        <a href="https://www.facebook.com/profile.php?id=100079954544425" target="_blank">
          FaceBook
        </a>
        <a href="https://t.me/diiiimsyyyy" target="_blank">
          Telegram
        </a>
        <a href="https://github.com/DmitriySavin">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
