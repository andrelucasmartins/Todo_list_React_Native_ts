import { Trash } from "@components/Icon/Svg/trash";
import { theme } from "@styles/theme";
import { Text, TouchableOpacity } from "react-native";

import { useState } from 'react';
import { styles } from './styles';

interface CreateButtonProps {
  onRemove: () => void
}

export function DeleteButton({ onRemove, ...props }: CreateButtonProps) {
  const [pressabled, setPressabled] = useState(false)

  function onPressabled() {
    setPressabled(!pressabled)
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onRemove}
      onPressIn={onPressabled}
      onPressOut={onPressabled}
      {...props}
    >
      <Text style={pressabled && styles.buttonActive}>
        <Trash
          color={!pressabled ? theme.colors.base.gray[300] : theme.colors.base.danger}
          size={13}
        />
      </Text>
    </TouchableOpacity>
  )
}