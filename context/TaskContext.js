import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext();
const STORAGE_KEY = "TASKS_STORAGE";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const loadTasks = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) setTasks(JSON.parse(data));
  };

  const addTask = (title, priority = "Medium") => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        priority,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // 🔥 EDIT TASK
  const updateTask = (id, title, priority) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title, priority } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
