import { theme } from '@styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,

    backgroundColor: theme.colors.base.gray[500],
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingStart: 12,
    paddingEnd: 8,
  },
  name: {
    flex: 1,
    ...theme.fonts[14].regular,
    color: theme.colors.base.gray[100],
    marginLeft: 16
  },
})