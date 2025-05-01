import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#FFF',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500'
  },
});

export default styles;