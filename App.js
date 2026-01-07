import { View, Text, FlatList } from "react-native";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { useContext } from "react";

function Main() {
  const { tasks, toggleTask, deleteTask } =
    useContext(TaskContext);

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        TaskFlow
      </Text>

      <Text style={{ color: "gray", marginBottom: 20 }}>
        Task + Priority + Edit + Storage
      </Text>

      <TaskInput />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  );
}
