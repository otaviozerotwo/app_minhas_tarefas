import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { FormTask } from "../../components/Form";
import styles from "./styles";

export function CreateTask() {
  return (
    <KeyboardAvoidingView 
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      style={{ flex: 1 }}
    >
      <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }}
        keyboardShouldPersistTaps='handled'
      >
        <FormTask />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}