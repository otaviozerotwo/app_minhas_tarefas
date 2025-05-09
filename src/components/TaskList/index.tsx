import { PressableProps, Text, View } from "react-native";
import styles from "./styles";
import { CustomCheckBox } from "../CustomCheckBox";
import { CustomMenu } from "../CustomMenu";
import { formatDueDate } from "../../utils/formatDueDate";
import { Task } from "../../entities/Task";

interface TaskListProps extends PressableProps {
  data: Task;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export function TaskList({ data, onToggle, onDelete }: TaskListProps) {
  const checked = data.status as 'pending' | 'completed';

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerCheckBoxTask}>
          <CustomCheckBox 
            checked={checked}
            onToggle={() => onToggle(data)}
            label={data.title}
          />
          
          <Text style={styles.dueDateStyle}>{formatDueDate(data.dueDate)}</Text>
          
        </View>

        <CustomMenu 
          task={data}
          onDelete={() => onDelete(data)}
        />
      </View>
    </>
  );
}