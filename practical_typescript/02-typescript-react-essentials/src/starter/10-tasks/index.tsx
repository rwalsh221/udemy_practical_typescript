import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { type Task } from "./types";

const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tsReactTasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const updateStorage = (tasks: Task[]): void => {
  localStorage.setItem("tsReactTasks", JSON.stringify(tasks));
};

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );
  };
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
