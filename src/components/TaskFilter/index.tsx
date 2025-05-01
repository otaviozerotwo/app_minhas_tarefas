import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

interface TaskFilterProps {
  filter: 'all' | 'pending' | 'completed';
  setFilter: (status: 'all' | 'pending' | 'completed') => void;
}

export function TaskFilter({ filter, setFilter }: TaskFilterProps) {
  const [status, setStatus] = useState<'all' | 'pending' | 'completed'>(filter);

  function handleFilter(item: 'all' | 'pending' | 'completed') {
    setStatus(item);
    setFilter(item);
  }

  return (
    <View style={styles.buttons}>
      <Pressable 
        style={[styles.button, status === 'all' && { backgroundColor: '#000' }]} 
        onPress={() => handleFilter('all')}
      >
        <Text style={[styles.buttonText, status === 'all' && { color: '#FFF' }]}>Todas</Text>
      </Pressable>

      <Pressable 
        style={[styles.button, status === 'pending' && { backgroundColor: '#000' }]} 
        onPress={() => handleFilter('pending')}
      >
        <Text style={[styles.buttonText, status === 'pending' && { color: '#FFF' }]}>Pendentes</Text>
      </Pressable>

      <Pressable 
        style={[styles.button, status === 'completed' && { backgroundColor: '#000' }]} 
        onPress={() => handleFilter('completed')}
      >
        <Text style={[styles.buttonText, status === 'completed' && { color: '#FFF' }]}>Concluídas</Text>
      </Pressable>
    </View>
  );
}