import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    marginBottom: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 4,
  },
  containerCheckBoxTask: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
  containerMenuButton: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    paddingVertical: 2,
  },
  menuButton: {
    padding: 4,
    marginLeft: 10,
  },
  menuButtonText: {
    textAlign: 'center',
  },
  dueDateStyle: {
    color: '#888',
    marginLeft: 32
  },
});

export default styles;