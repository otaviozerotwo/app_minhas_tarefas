import { findNodeHandle, Pressable, PressableProps, UIManager } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { useRef, useState } from "react";
import { CustomModal } from "../CustomModal";

interface CustomMenuProps extends PressableProps {
  onDelete: () => void;
  onEdit: () => void;
}

export function CustomMenu({ onDelete, onEdit }: CustomMenuProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef(null);

  function handleOpenModal() {
    const handle = findNodeHandle(ref.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
        setPosition({ top: pageY + 24, left: pageX - 136 });
        setVisible(true);
      });
    }
    setVisible(true);
  }

  return (
    <>
      <Pressable ref={ref} onPress={handleOpenModal} style={styles.container}>
        <Entypo name="dots-three-vertical" size={20} color="#555" />
      </Pressable>

      <CustomModal
        visible={visible}
        onPress={() => setVisible(false)}
        onDelete={onDelete}
        onEdit={onEdit}
        position={position}
      />
    </>
  )
}