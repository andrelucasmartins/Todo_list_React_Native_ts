
import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },
  buttonActive: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.base.gray[400],
  },
})