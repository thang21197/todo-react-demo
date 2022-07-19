import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ITodo, Todos } from "../store/todoStore";
import "./styles.css";

type Props = {
  todo: ITodo;
};

function Todo({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState<string>(todo.title);

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt: React.FormEvent) => {
    evt.preventDefault();
    Todos.editTodo(todo.id, { ...todo, title: task });
    toggleFrom();
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={() => Todos.setCompleted(todo.id)}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.title}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={() => Todos.setRemove(todo.id)}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
