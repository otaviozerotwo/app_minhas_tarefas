import { Modal, ModalProps, Pressable, Text, View } from "react-native";
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

interface CustomModalProps extends ModalProps {
  visible: boolean;
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
  position: { top: number; left: number };
}

export function CustomModal({ visible, onPress, onDelete, onEdit, position }: CustomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={[styles.absoluteView, { top: position.top, left: position.left }]}>
        <View style={styles.modalView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Opções</Text>
            <Pressable
              onPress={onPress}
            >
              <Ionicons name="close" size={20} color="#000" />
            </Pressable>
          </View>

          <Pressable
            disabled
            style={styles.optionButton}
            onPress={() => { onEdit(); onPress(); }}
          >
            <Feather name="edit" size={16} color="#D4D4D4" />
            <Text style={[styles.optionText, { color: '#D4D4D4', textDecorationLine: 'line-through' }]}>Editar</Text>
          </Pressable>
        
        
          <Pressable
            style={styles.optionButton}
            onPress={() => { onDelete(); onPress(); }}
          >
            <FontAwesome name="trash-o" size={20} color="#000" />
            <Text style={styles.optionText}>Excluir</Text>
          </Pressable>    
        </View>
      </View>
    </Modal>
  );
}