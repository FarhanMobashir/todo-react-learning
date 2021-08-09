import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";

const NewTodo = React.memo(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (title === "" || description === "") {
      setErrorText("Please fill both fields");
    } else {
      event.preventDefault();
      dispatch(addTodo({ title, description }));
      setTitle("");
      setDescription("");
      setErrorText("");
    }
  };
  return (
    <div className="new-todo-container">
      <form className="new-todo-form" action="" onSubmit={handleChange}>
        <div className="form-element-cotainer">
          <input
            type="text"
            value={title}
            placeholder="Enter todo here"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-element-cotainer">
          <textarea
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-element-cotainer">
          <input type="submit" value="Add todo" className="add-todo" />
        </div>
        <p>{errorText}</p>
      </form>
    </div>
  );
});

export default NewTodo;
