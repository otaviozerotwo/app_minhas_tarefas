import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { taskRepository } from "../../repositories/taskRepository";
import { TaskList } from "../TaskList";
import { useFindTasks } from "../../hooks/useFindTasks";
import { Task } from "../../entities/Task";

interface TasksProps {
  filter: 'all' | 'pending' | 'completed';
}

export function Tasks({ filter }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { handleFindTasks } = useFindTasks(filter, setTasks);
  
  async function handleToggle(task: Task) {
    const newStatus = (task.status === 'pending' ? 'completed' : 'pending') as 'pending' | 'completed';
    const updatedTask = { ...task, status: newStatus };
    await taskRepository.save(updatedTask);

    setTasks(prevTask => prevTask.map(t => t.id === updatedTask.id ? updatedTask: t));

    await handleFindTasks();
  }

  async function handleDelete(task: Task) {
    const taskToRemove = { ...task, status: task.status as 'pending' | 'completed' }
    await taskRepository.remove(taskToRemove);
    await handleFindTasks();
  }

  useFocusEffect(
    useCallback(() => {
      handleFindTasks();
    }, [handleFindTasks])
  );
  
  return (
    <>
      <FlatList
        data={tasks}
        keyExtractor={ (item) => String(item.id) }
        renderItem={({ item }) => (
          <TaskList 
            data={item} 
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      />
    </>
  );
}