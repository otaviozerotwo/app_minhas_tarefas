import { Pressable, Text, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import styles from "./styles";

interface HeaderProps {
  title: string;
  onPress: () => void;
}

export function Header({ title, onPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <Pressable 
        onPress={onPress}
        style={styles.button}
      >
        <FontAwesome6 name="plus" size={24} color="#000" />
      </Pressable>
    </View>
  );
}