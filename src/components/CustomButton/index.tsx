import { Pressable, PressableProps, Text } from "react-native";
import styles from "./styles";

interface CustomButtonProps extends PressableProps {
  onPress: () => void;
  label: string;
}

export function CustomButton({ onPress, label }: CustomButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}