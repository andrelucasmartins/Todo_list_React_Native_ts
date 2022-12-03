import { View } from "react-native";
import { theme } from '../../styles/theme';

export const Divider = () => {
  return (
    <View
      style={{
        borderTopColor: theme.colors.base.gray[300],
        borderBottomWidth: 1
      }}
    />
  )
}