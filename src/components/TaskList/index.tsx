import { PressableProps, Text, View } from "react-native";
import { Task } from "../../@types/task";
import styles from "./styles";
import { CustomCheckBox } from "../CustomCheckBox";
import { CustomMenu } from "../CustomMenu";
import { formatDueDate } from "../../utils/formatDueDate";

interface TaskListProps extends PressableProps {
  data: Task;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
  onEdit: (task: Task) => void;
}

export function TaskList({ data, onToggle, onDelete, onEdit }: TaskListProps) {
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
          onEdit={() => onEdit(data)}
          onDelete={() => onDelete(data)}
        />
      </View>
    </>
  );
}