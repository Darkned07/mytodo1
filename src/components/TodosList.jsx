import React from "react";
import { useDeleteDoc } from "../hooks/useDeleteDoc";
function TodosList({ todos }) {
  const { deleteTodo } = useDeleteDoc();
  return (
    <div className="mt-[20px] px-[1px] py-[20px]">
      <ul className="flex  flex-wrap items-center gap-[10px]">
        {todos.map((todo) => {
          return (
            <li
              className="card w-[345px]  bg-base-100 shadow-2xl"
              key={todo.id}
            >
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.body}</p>
                <p>
                  Completed: <span>{todo.completed ? "✅" : "❌"}</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                  <button
                    onClick={() => {
                      deleteTodo("todos", todo.id);
                    }}
                    className="btn btn-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodosList;
