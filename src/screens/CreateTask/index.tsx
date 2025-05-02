import { ScrollView, View } from "react-native";
import { FormTask } from "../../components/Form";
import styles from "./styles";

export function CreateTask() {
  return (
    <ScrollView style={styles.container}>
      <FormTask />
    </ScrollView>
  );
}