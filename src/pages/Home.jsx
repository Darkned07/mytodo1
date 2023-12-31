import React from "react";
import { useCollection } from "../hooks/useCollection";
import TodosList from "../components/TodosList";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const {user} = useGlobalContext()
  const { documents: todos } = useCollection("todos", ["uid", "==", user.uid]);
  return (
    <div>
      {todos && <TodosList todos={todos} />}
      <div className="flex  flex-col place-items-center ">
        {!todos && (
          <p className="flex flex-row items-center gap-[5px] text-[25px] ">
            Loading
            <span className="loading loading-dots loading-md mt-[10px]"></span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
