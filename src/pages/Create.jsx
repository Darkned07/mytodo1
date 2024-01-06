import { useEffect, useRef } from "react";
import { useAddNewDoc } from "../hooks/useAddNewDoc";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Create() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const { addNewDoc, newTodo, isPending } = useAddNewDoc();
  const title = useRef();
  const body = useRef();
  const completed = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewDoc("todos", {
      title: title.current.value,
      body: body.current.value,
      completed: completed.current.checked,
      uid: user.uid,
    });
  };

  useEffect(() => {
    if (!isPending && newTodo) {
      navigate("/");
    }
  }, [isPending, newTodo]);

  return (
    <div className="max-container">
      <h1 className="my-10 text-center text-4xl font-semibold">
        Create New Todo
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="form-control mb-4 w-full max-w-lg">
          <div className="label">
            <span className="label-text text-2xl">Title</span>
          </div>
          <input
            ref={title}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </label>
        <label className="form-control mb-4 w-full max-w-lg">
          <div className="label">
            <span className="label-text text-2xl">Body</span>
          </div>
          <textarea
            ref={body}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Completed: </span>
          <input
            ref={completed}
            defaultChecked={false}
            type="checkbox"
            className="checkbox-primary checkbox"
          />
        </label>
        {!isPending && <Button text={"Add Todo"} disabled={false} />}
        {isPending && <Button text={"Add Todo"} disabled={true} />}
      </form>
    </div>
  );
}

export default Create;
