import React from "react";

function TodosList({ todos }) {
  console.log(todos);
  return (
    <div className="py-[20px]">
      <ul className="flex  flex-wrap items-center gap-[10px]">
        {todos.map((todo) => {
          return (
            <li className="card w-[345px]  bg-base-100 shadow-xl" key={todo.id}>
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.body}</p>
                <p>
                  Completed: <span>{todo.completed ? "✅" : "❌"}</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
