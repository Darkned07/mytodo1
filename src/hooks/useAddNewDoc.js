import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { toast } from "react-toastify";

export function useAddNewDoc() {
  const [newTodo, setNewTodo] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addNewDoc = async (col, data) => {
    setIsPending(true);
    const docRef = await addDoc(collection(db, col), data);
    setNewTodo(docRef);
    setIsPending(false);
    toast.success('New Todo Added ✅')
  };
  return { addNewDoc, newTodo, isPending };
}
