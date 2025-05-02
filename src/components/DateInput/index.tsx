import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function DateInput({ value, onChange }: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  function handleChange(event: any, selectedDate?: Date) {
    setShowPicker(false);

    if (selectedDate) {
      const formatted = selectedDate.toISOString().split('T')[0]; // yyyy-mm-dd
      onChange(formatted);
    }
  }

  function formatDate(dateString: string) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  return (
    <View>
      <Text style={styles.label}>Data de Vencimento</Text>
      <Pressable
        onPress={() => setShowPicker(true)}
        style={styles.container}
      >
        <Text style={{ color: value ? '#000' : '#888'}}>
          {value ? formatDate(value) : 'dd/mm/aaaa'}
        </Text>
        <FontAwesome name="calendar" size={20} color="#888" />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}