import { StyleSheet } from 'react-native';

import { theme } from '@styles/theme'

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 17.45,
    height: 17.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: theme.colors.product.blue.default,
    backgroundColor: 'transparent',
    margin: 3.27
  },
  checkboxChecked: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.product.purple.default,
    borderColor: theme.colors.product.purple.default,
  },
  text: {
    flex: 1,
    width: 235,
    color: theme.colors.base.gray[100],
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    ...theme.fonts[14].regular,
    marginHorizontal: 8,

  },
  textChecked: {
    color: theme.colors.base.gray[300],
    textDecorationLine: 'line-through'
  }
})