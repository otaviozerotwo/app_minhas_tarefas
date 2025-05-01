import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Tasks } from "../../components/Tasks";
import styles from "./styles";
import { TaskFilter } from "../../components/TaskFilter";

export function Home() {
  const [taskFilter, setTaskFilter] = useState<'all' | 'completed' | 'pending'>('all');

  return (
    <>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />

      <SafeAreaView style={styles.container}>
        <TaskFilter filter={taskFilter} setFilter={(status) => setTaskFilter(status)} />
        
        {taskFilter && (
          <Tasks filter={taskFilter} />
        )}

      </SafeAreaView>
    </>
  );
}