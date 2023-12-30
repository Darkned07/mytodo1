import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        result.push(todo);
      });
      setDocuments(result);
    });

    return () => unsubscribe();
  }, []);

  return { documents };
}
