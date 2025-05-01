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

  const [task, setTask] = useState('');

  const [prioridade, setPrioridade] = useState('Baixa');
  const [categoria, setCategoria] = useState('Pessoal');

  const prioridadeOptions = [
    { key: 'baixa', value: 'Baixa' },
    { key: 'media', value: 'Média' },
    { key: 'alta', value: 'Alta' },
  ];

  const categoriaOptions = [
    { key: 'trabalho', value: 'Trabalho' },
    { key: 'pessoal', value: 'Pessoal' },
    { key: 'estudos', value: 'Estudos' },
  ];

  async function handleNewTask(taskName: string) {
    if (!taskName.trim()) return;

    try {
      const newTask = taskRepository.create({
        task: taskName,
        status: 'pending',
      });

      await taskRepository.save(newTask);

      Keyboard.dismiss();
      setTask('');
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
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        placeholder="Adicione uma descrição"
        multiline
        numberOfLines={4}
        // maxLength={40}
        // value={}
        // onChangeText={}
        textAlignVertical="top"
        style={styles.textArea}
      />

      <DateInput />
      
      <CustomDropdown
        label="Prioridade"
        data={prioridadeOptions}
        selected={prioridade}
        setSelected={setPrioridade}
      />

      <CustomDropdown
        label="Categoria"
        data={categoriaOptions}
        selected={categoria}
        setSelected={setCategoria}
      />

      <CustomButton onPress={() => handleNewTask(task)} label="Criar Tarefa" />
    </View>
  );
}