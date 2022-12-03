import { TextInput } from "react-native"
import { styles } from './styles';
import { theme } from '@styles/theme';

export const Input = ({ ...props }) => {
  return (
    <TextInput
      style={styles.input}
      keyboardAppearance='dark'
      placeholderTextColor={theme.colors.base.gray[300]}

      {...props}
    />
  )
}