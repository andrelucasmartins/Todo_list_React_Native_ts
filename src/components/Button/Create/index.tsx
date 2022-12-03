import { TouchableOpacity, Text } from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons'

// import { PlusIcon } from "../../Icon/Svg/plus";

import { styles } from './styles';
import { Checkbox } from '../../Checkbox/index';

export function CreateButton({ ...props }) {
  return (
    <TouchableOpacity
      style={styles.button}
      // onFocus={({ focused }) => ({ backgroundColor: focused ? 'red' : 'blue' })}
      {...props}
    >
      <Text style={styles.buttonText}>
        <Ionicons name='md-add-circle-outline' size={20} color='#fff' />
      </Text>
    </TouchableOpacity>
  )
}