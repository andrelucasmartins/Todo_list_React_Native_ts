import { Pressable, Text } from 'react-native';

import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

interface CheckboxProps {
  text?: string
  checked: boolean
  onChecked: () => void

}

export function Checkbox({ text, checked, onChecked, ...props }: CheckboxProps) {
  return (
    <>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onChecked}
        {...props}
      >
        {checked && <Ionicons name="checkmark" size={11} color="white" />}
      </Pressable>

      <Text style={[styles.text, checked && styles.textChecked]}>{text}</Text>
    </>
  );
}