import { Pressable, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

interface CustomCheckBoxProps {
  checked: 'pending' | 'completed';
  onToggle: () => void;
  label: string;
}

export function CustomCheckBox({ checked, onToggle, label }: CustomCheckBoxProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={[styles.circle, checked === 'completed' && styles.circleChecked]}>
        {checked === 'completed' && <Feather name="check" size={16} color="#FFF" />}
      </View>
      <Text style={[styles.label, checked === 'completed' && styles.completed]}>
        {label}
      </Text>
    </Pressable>
  );
}