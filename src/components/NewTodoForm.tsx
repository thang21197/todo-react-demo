import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import { Todos } from "../store/todoStore";
import "./styles.css";

function NewTodoForm() {
  const [taskValue, setChangeTaskValue] = useState<string>("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChangeTaskValue(evt.target.value ?? "");
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    Todos.addNewTodo(taskValue);
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={taskValue}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
