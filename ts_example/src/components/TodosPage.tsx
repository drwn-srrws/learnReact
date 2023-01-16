import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={todos}
      renderItems={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    ></List>
  );
};
export default TodosPage;
