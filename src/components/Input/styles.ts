import { theme } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginEnd: 8,
    padding: 16,
    gap: 8,
    height: 54,
    fontSize: 16,
    color: theme.colors.base.gray[100],

    backgroundColor: theme.colors.base.gray[500],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.base.gray[700],

    borderRadius: 8,

    focused: {
      border: ` ${1} solid ${theme.colors.base.danger}`,
    }
  }
})