import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import PriorityBadge from "./PriorityBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  const { updateTask } = useContext(TaskContext);

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const saveHandler = () => {
    updateTask(task.id, text, priority);
    setEditing(false);
  };

  if (editing) {
    return (
      <View
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          marginBottom: 10,
        }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          style={{
            borderWidth: 1,
            padding: 8,
            marginBottom: 8,
          }}
        />

        <Button title="High" onPress={() => setPriority("High")} />
        <Button title="Medium" onPress={() => setPriority("Medium")} />
        <Button title="Low" onPress={() => setPriority("Low")} />

        <Button title="Save" onPress={saveHandler} />
        <Button title="Cancel" onPress={() => setEditing(false)} />
      </View>
    );
  }

  return (
    <View
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: task.completed
              ? "line-through"
              : "none",
          }}
        >
          {task.title}
        </Text>
      </TouchableOpacity>

      <PriorityBadge priority={task.priority} />

      <Button title="Edit" onPress={() => setEditing(true)} />
      <Button
        title="Delete"
        color="red"
        onPress={() => onDelete(task.id)}
      />
    </View>
  );
}
