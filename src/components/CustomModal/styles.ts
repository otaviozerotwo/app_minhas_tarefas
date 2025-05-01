import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  absoluteView: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'transparent',
    maxWidth: 164,
    width: '100%',
  },
  modalView: {
    backgroundColor: '#FFF',
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 16,
    borderRadius: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#D4D4D4'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 6,
    gap: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default styles;