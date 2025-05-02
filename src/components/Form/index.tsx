import React, { useState } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { DateInput } from "../DateInput";
import { CustomDropdown } from "../CustomDropdown";
import { CustomButton } from "../CustomButton";
import { taskRepository } from "../../repositories/taskRepository";
import { useNavigation } from "@react-navigation/native";

export function FormTask() {
  const navigation = useNavigation();

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Baixa');
  const [taskCategory, setTaskCategory] = useState('Pessoal');

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

  async function handleNewTask(
    taskName: string, 
    description: string, 
    dueDate: string, 
    priority: string, 
    category: string
  ) {
    if (!taskName.trim()) return;

    try {
      const newTask = taskRepository.create({
        title: taskName.trim(),
        description: description.trim(),
        dueDate: dueDate.trim(),
        priority: priority.trim(),
        category: category.trim(),
        status: 'pending',
      });

      await taskRepository.save(newTask);

      Keyboard.dismiss();
      setTaskTitle('');
      setTaskDescription('');
      setTaskDueDate('');
      setTaskPriority('');
      setTaskCategory('');

      navigation.goBack();

    } catch (error) {
      console.error('Erro ao criar nova tarefa:', error);
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

      <DateInput value={taskDueDate} onChange={setTaskDueDate}/>
      
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

      <CustomButton onPress={() => handleNewTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskCategory)} label="Criar Tarefa" />
    </View>
  );
}