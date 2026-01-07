import { View, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const { addTask } = useContext(TaskContext);

  const submitHandler = () => {
    if (!text.trim()) return;
    addTask(text, priority);
    setText("");
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder="Write a task..."
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
        }}
      />

      <Button
        title={`Add Task (${priority})`}
        onPress={submitHandler}
      />

      <View style={{ marginTop: 10 }}>
        <Button title="High" onPress={() => setPriority("High")} />
        <Button title="Medium" onPress={() => setPriority("Medium")} />
        <Button title="Low" onPress={() => setPriority("Low")} />
      </View>
    </View>
  );
}
