import { useState } from "react";
import { CVAPIDataSourceImpl } from "../../../Data/";
import { TodoRepositoryImpl } from "../../../Data/Repository/TodoRepositoryImpl";
import { CV } from "../../../Domain";
import { GetCV } from "../../../Domain";

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const UseCase = new GetTodos(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  );

  async function getTodos() {
    setTodos(await UseCase.invoke());
  }

  return {
    getTodos,
    todos,
  };
}
