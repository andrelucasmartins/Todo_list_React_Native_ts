import { StyleSheet } from "react-native";
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: `${theme.colors.product.blue.dark}`,
    alignItems: 'center',
    justifyContent: 'center'
  },
})