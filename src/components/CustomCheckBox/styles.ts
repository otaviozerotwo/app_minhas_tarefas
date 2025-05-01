import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  circle: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleChecked: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default styles;