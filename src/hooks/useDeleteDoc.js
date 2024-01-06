import { toast } from "react-toastify";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useDeleteDoc() {
  const deleteTodo = async (col, id) => {
    await deleteDoc(doc(db, col, id));
    toast.success("todo deleted successufly");
  };
  return { deleteTodo };
}
