import { makeObservable, observable, computed, action } from "mobx";
import uuid from "uuid";
import queryString from "query-string";
import tasks from "../config/task";

export interface ITodo {
  // id: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  @observable isloading = false;
  @observable data: ITodo[] = [];

  constructor() {
    makeObservable(this);
  }

  @action async getTodos() {
    try {
      this.isloading = true;
      const params = {
        page: 1,
        limit: 5
      };
      const queryParams = queryString.stringify(params);
      const res = await tasks.getAllTask(queryParams);
      console.log("res", res);
      const { data, status } = res;
      if (status === 200) {
        this.data = data;
        this.isloading = false;
      }
    } catch (error) {
      console.log("error", error);
      this.isloading = false;
    }
  }

  @action
  async addNewTodo(title: string) {
    const newData = {
      userId: 1,
      title,
      completed: false
    };
    const res = await tasks.addNewTask(newData);
    console.log("res", res);
    // newData.push({
    //   id: uuid(),
    //   title,
    //   completed: false
    // });
    // this.data = newData;
  }

  @action setCompleted(curId: string) {
    this.data = this.data.map((todo) =>
      todo.id === curId ? { ...todo, completed: true } : todo
    );
  }

  @action setRemove(curId: string) {
    this.data = this.data.filter((todo) => todo.id !== curId);
  }

  @action editTodo(curId: string, data: ITodo) {
    this.data = this.data.map((todo) =>
      todo.id === curId ? { ...todo, ...data, completed: false } : todo
    );
    //  const currentTask = {...this.data.find(({id})=> id === curId),...data, completed: false}
  }
}

export const Todos = new TodoStore();
