import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";
import "./styles.css";
import { observer } from "mobx-react";
import { Todos } from "../store/todoStore";
import task from "../config/task";
import queryString from "query-string";

const TodoList = observer(() => {
  const { data, isloading } = Todos;

  const todosList = data.map((todo, index) => (
    <Todo key={todo.id} todo={todo} />
  ));

  useEffect(() => {
    Todos.getTodos();
  }, []);

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      {isloading ? <h3>Loading...</h3> : <ul>{todosList}</ul>}
      <NewTodoForm />
    </div>
  );
});

export default TodoList;
