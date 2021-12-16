import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITask } from "../types/types";
import List from "./List";
import TaskItem from "./TodoItem";

export const TasksPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  async function fetchTasks() {
    try {
      const response = await axios.get<ITask[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <List
      items={tasks}
      renderItem={(task) => <TaskItem task={task} key={task.id} />}
    />
  );
};
