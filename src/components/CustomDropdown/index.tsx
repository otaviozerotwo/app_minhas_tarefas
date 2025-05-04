import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./styles";

interface CustomSelectProps {
  data: { key: string; value: string }[];
  selected: string;
  setSelected: (value: string) => void;
  label: string;
}

export function CustomDropdown({
  data,
  selected,
  setSelected,
  label
}: CustomSelectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SelectList
        data={data}
        setSelected={setSelected}
        searchPlaceholder="Localizar opção"
        save="value"
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        dropdownItemStyles={styles.dropdownStyle}
        defaultOption={selected ? { key: selected, value: selected } : undefined}
      />
    </View>
  );
}