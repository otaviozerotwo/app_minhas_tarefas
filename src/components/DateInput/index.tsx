import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export function DateInput() {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  function handleChange(event: any, selectedDate?: Date) {
    setShowPicker(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  function formatDate(date: Date) {
    return date.toLocaleDateString('pt-BR');
  }

  return (
    <View>
      <Text style={styles.label}>Data de Vencimento</Text>
      <Pressable
        onPress={() => setShowPicker(true)}
        style={styles.container}
      >
        <Text style={{ color: date ? '#000' : '#888'}}>
          {date ? formatDate(date) : 'dd/mm/aaaa'}
        </Text>
        <FontAwesome name="calendar" size={20} color="#888" />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}