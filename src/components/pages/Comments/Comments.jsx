import { db } from "../../FireBase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import styles from "./Comments.module.css";
import { serverTimestamp } from "firebase/firestore";

const Comments = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addComments = async (e) => {
    e.preventDefault();

    if (!name || !message) return;

    await addDoc(collection(db, "messages"), {
      name: name.toLowerCase(),
      message,
      createdAt: serverTimestamp(),
    });

    setName("");
    setMessage("");
  };

  const getComments = async () => {
    const snapshot = await getDocs(collection(db, "messages"));
    const comments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Comments</h2>

      {/* FORM BLOCK (layout only wrapper) */}
      <div className={styles.formBox}>
        <form className={styles.form} onSubmit={addComments}>
          <label className={styles.label}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            <textarea
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.btn}>
            Send message
          </button>
        </form>
      </div>

      {/* COMMENTS LIST */}
      <ul className={styles.comments}>
        {data.map((item) => (
          <li key={item.id} className={styles.commentsItem}>
            <div className={styles.wrapperInfo}>
              <p className={styles.infoTitle}>{item.name}</p>
              <p className={styles.time}>
                {item.createdAt?.toDate().toLocaleString()}
              </p>
            </div>

            <p>{item.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;