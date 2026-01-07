import { Text, StyleSheet } from "react-native";

export default function PriorityBadge({ priority }) {
  const color =
    priority === "High"
      ? "#ef4444"
      : priority === "Medium"
      ? "#f59e0b"
      : "#22c55e";

  return (
    <Text style={[styles.badge, { backgroundColor: color }]}>
      {priority}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 6,
    alignSelf: "flex-start",
  },
});
