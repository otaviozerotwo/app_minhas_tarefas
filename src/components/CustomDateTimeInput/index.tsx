import { View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "./styles";

interface CustomDateTimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CustomDateTimeInput({ value, onChange }: CustomDateTimeInputProps) {
  return (
    <View>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY HH:mm'
        }}
        value={value}
        onChangeText={onChange}
        placeholder="DD/MM/AAAA HH:mm"
        placeholderTextColor="#888"
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}