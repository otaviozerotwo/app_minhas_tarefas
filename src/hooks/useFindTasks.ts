import { useCallback } from "react";
// import { Task } from "../@types/task";
import { taskRepository } from "../repositories/taskRepository";
import { Task } from "../entities/Task";

export function useFindTasks(filter: 'all' | 'pending' | 'completed', setTasks: (tasks: Task[]) => void) {
  const handleFindTasks = useCallback(async () => {
    const storageTasks = await taskRepository.find(
      filter === 'all' ? {} : { where: { status: filter } }
    );
    setTasks(storageTasks);
  }, [filter, setTasks]);

  return { handleFindTasks };
}