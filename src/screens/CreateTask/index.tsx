import { View } from "react-native";
import { FormTask } from "../../components/Form";
import styles from "./styles";

export function CreateTask() {
  return (
    <View style={styles.container}>
      <FormTask />
    </View>
  );
}