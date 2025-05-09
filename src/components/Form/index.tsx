import React, { useEffect, useState } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { CustomDropdown } from "../CustomDropdown";
import { CustomButton } from "../CustomButton";
import { taskRepository } from "../../repositories/taskRepository";
import { useNavigation } from "@react-navigation/native";
import { CustomDateTimeInput } from "../CustomDateTimeInput";
import { convertToISOString } from "../../utils/convertToISOString";
import { Task } from "../../entities/Task";
import { format } from "date-fns";

interface FormTaskProps {
  existingTask?: Task | null;
}

export function FormTask({ existingTask }: FormTaskProps) {
  const navigation = useNavigation();

  const [taskTitle, setTaskTitle] = useState(existingTask?.title || '');
  const [taskDueDate, setTaskDueDate] = useState(existingTask?.dueDate || '');
  const [taskDescription, setTaskDescription] = useState(existingTask?.description || '');
  const [taskPriority, setTaskPriority] = useState(existingTask?.priority || 'Baixa');
  const [taskCategory, setTaskCategory] = useState(existingTask?.category || 'Pessoal');

  const [isoDateTime, setIsoDateTime] = useState(new Date().toISOString());

  useEffect(() => {
    if (existingTask) {
      setTaskTitle(existingTask.title);
      setTaskDescription(existingTask.description);
      setTaskDueDate(format(new Date(existingTask.dueDate), 'dd/MM/yyyy HH:mm'));
      setTaskPriority(existingTask.priority);
      setTaskCategory(existingTask.category);
      setIsoDateTime(existingTask.dueDate);
    }
  }, [existingTask]);

  const priorityOptions = [
    { key: 'baixa', value: 'Baixa' },
    { key: 'media', value: 'Média' },
    { key: 'alta', value: 'Alta' },
  ];

  const categoryOptions = [
    { key: 'trabalho', value: 'Trabalho' },
    { key: 'pessoal', value: 'Pessoal' },
    { key: 'estudos', value: 'Estudos' },
  ];

  const handleChange = (value: string) => {
    setTaskDueDate(value);

    if (value) {
      const iso = convertToISOString(value);
      setIsoDateTime(iso);
    } else {
      setIsoDateTime('');
    }
  };

  async function handleSubmit(
    taskName: string, 
    description: string, 
    isoDateTime: any, 
    priority: string, 
    category: string
  ) {
    if (!taskName.trim()) return;

    try {
      if (existingTask) {
        const updatedTask = {
          ...existingTask,
          title: taskName.trim(),
          description: description.trim(),
          dueDate: isoDateTime.trim(),
          priority: priority.trim(),
          category: category.trim(),
        };
        await taskRepository.save(updatedTask);
      } else {
        const newTask = taskRepository.create({
          title: taskName.trim(),
          description: description.trim(),
          dueDate: isoDateTime.trim(),
          priority: priority.trim(),
          category: category.trim(),
          status: 'pending',
        });
        await taskRepository.save(newTask);
      }

      Keyboard.dismiss();
      navigation.goBack();

    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <TextInput
        placeholder="Digite o título da tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        placeholder="Adicione uma descrição"
        multiline
        numberOfLines={4}
        value={taskDescription}
        onChangeText={setTaskDescription}
        textAlignVertical="top"
        style={styles.textArea}
      />

      <Text style={styles.label}>Data de Vencimento</Text>
      <CustomDateTimeInput value={taskDueDate} onChange={handleChange} />
      
      <CustomDropdown
        label="Prioridade"
        data={priorityOptions}
        selected={taskPriority}
        setSelected={setTaskPriority}
      />

      <CustomDropdown
        label="Categoria"
        data={categoryOptions}
        selected={taskCategory}
        setSelected={setTaskCategory}
      />

      <CustomButton 
        onPress={() => handleSubmit(taskTitle, taskDescription, isoDateTime, taskPriority, taskCategory)} 
        label={existingTask ? "Atualizar Tarefa" : "Criar Tarefa"} />
    </View>
  );
}