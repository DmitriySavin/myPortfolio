import { log } from "firebase/firestore/lite/pipelines";
import { db } from "../../FireBase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState , useEffect} from "react";


const Comments = () => {
const [data , setData] = useState([])

  const getComments = async () => {
    const snapshot = await getDocs(collection(db, "comments"));
      const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
      }));
    setData(comments)
    // console.log("comments" , comments));
  };
    return (
        <ul>
            {data.map(daten => (
                <li key={daten.id}>
                    <h2>{daten.name}</h2>
                </li>
            ))}
      </ul>
  );
};
export default Comments;
