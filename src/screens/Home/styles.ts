import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray[600],
  },
  header: {
    backgroundColor: theme.colors.base.gray[700],
    height: 173,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 110.34,
    height: 32
  },
  form: {
    width: "100%",
    height: 54,
    flexDirection: 'row',
    marginTop: -30,
    paddingHorizontal: 24
  },
  task: {
    width: '100%',
    minHeight: 327,
    marginTop: 48,
    paddingHorizontal: 24,
  },
  counters: {
    width: '100%',
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 20,
  },
  counterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,

    width: 87,
    height: 19,
  },
  text: {
    color: theme.colors.product.blue.default,
    ...theme.fonts[14].regular,

  },
  text2: {
    color: theme.colors.product.purple.default,
    ...theme.fonts[14].regular
  },
  counterNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: 25,
    height: 19,

    backgroundColor: theme.colors.base.gray[400],
    borderRadius: 999,

  },
  done: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    // gap: 8,

    width: 111,
    height: 19,

  },
  listNone: {
    borderTopColor: theme.colors.base.gray[400],
    borderTopWidth: 1,

    height: 208,
    width: '100%',

    justifyContent: 'center',
    alignItems: "center"
  },
  notListContainer: {
    marginTop: 16,
    flexDirection: 'column'
  },
  notListTextBold: {
    color: theme.colors.base.gray[300],
    ...theme.fonts[14].bold,
  },
  notListText: {
    color: theme.colors.base.gray[300],
    ...theme.fonts[14].regular,
  }
});