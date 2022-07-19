import { ITodo } from "../store/todoStore";
import { API } from "./api-config";

const tasks = {
  getAllTask: (params?: string) => {
    API.get(`todos/my-todo?${params}`);
  },
  addNewTask: (data: ITodo) => API.post(`todos`, data)
};

export default tasks;
