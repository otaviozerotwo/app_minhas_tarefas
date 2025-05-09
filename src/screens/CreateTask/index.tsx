import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { FormTask } from "../../components/Form";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Task } from "../../entities/Task";
import { AppDataSource } from "../../data-source";

type RouteParams = {
  id?: number;
}

export function CreateTask() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    if (id) {
      const loadTask = async () => {
        try {
          const repo = AppDataSource.getRepository(Task);
          const task = await repo.findOneBy({ id });

          if (task) {
            setTaskToEdit(task);
          }
        } catch (error) {
          console.error('Erro ao carregar tarefa para edição', error);
        }
      };
      loadTask();
    }
  }, [id]);

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
        <FormTask existingTask={taskToEdit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}