import React, { useState } from "react";

const NewTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (event) => {
    if (title === "" || description === "") {
      return;
    } else {
      event.preventDefault();
      onSubmit({ title, description });
      setTitle("");
      setDescription("");
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
      </form>
    </div>
  );
};

export default NewTodo;
